import React, { useState, useRef, useEffect } from "react";
import BufferLoader from "./Helper/function";

import IconList from "./IconList";
import ImageMove from "./ImageMove";
import "./Rhythm.css";
window.AudioContext = window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();
const r =
  "data:audio/mp3;base64,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VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//t0xOoAETlHG+ew2QFgl2H0V6VwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sUxNoDwAAB/gAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV";

const r2 =
  "data:audio/mp3;base64,T2dnUwACAAAAAAAAAADZHbFEAAAAAK6ab5EBHgF2b3JiaXMAAAAAAUSsAAAAAAAAgDgBAAAAAAC4AU9nZ1MAAAAAAAAAAAAA2R2xRAEAAADe4EZWDoD///////////////+BA3ZvcmJpcw0AAABMYXZmNTkuMTAuMTAwBAAAAB8AAABlbmNvZGVyPUxhdmM1OS4xNC4xMDAgbGlidm9yYmlzEQAAAGVuY29kZWRfYnk9UkVBUEVSDwAAAGRhdGU9MjAwOS0wNy0xORQAAAB0aW1lX3JlZmVyZW5jZT03MDU1OQEFdm9yYmlzIkJDVgEAQAAAJHMYKkalcxaEEBpCUBnjHELOa+wZQkwRghwyTFvLJXOQIaSgQohbKIHQkFUAAEAAAIdBeBSEikEIIYQlPViSgyc9CCGEiDl4FIRpQQghhBBCCCGEEEIIIYRFOWiSgydBCB2E4zA4DIPlOPgchEU5WBCDJ0HoIIQPQriag6w5CCGEJDVIUIMGOegchMIsKIqCxDC4FoQENSiMguQwyNSDC0KImoNJNfgahGdBeBaEaUEIIYQkQUiQgwZByBiERkFYkoMGObgUhMtBqBqEKjkIH4QgNGQVAJAAAKCiKIqiKAoQGrIKAMgAABBAURTHcRzJkRzJsRwLCA1ZBQAAAQAIAACgSIqkSI7kSJIkWZIlWZIlWZLmiaosy7Isy7IsyzIQGrIKAEgAAFBRDEVxFAcIDVkFAGQAAAigOIqlWIqlaIrniI4IhIasAgCAAAAEAAAQNENTPEeURM9UVde2bdu2bdu2bdu2bdu2bVuWZRkIDVkFAEAAABDSaWapBogwAxkGQkNWAQAIAACAEYowxIDQkFUAAEAAAIAYSg6iCa0535zjoFkOmkqxOR2cSLV5kpuKuTnnnHPOyeacMc4555yinFkMmgmtOeecxKBZCpoJrTnnnCexedCaKq0555xxzulgnBHGOeecJq15kJqNtTnnnAWtaY6aS7E555xIuXlSm0u1Oeecc84555xzzjnnnOrF6RycE84555yovbmWm9DFOeecT8bp3pwQzjnnnHPOOeecc84555wgNGQVAAAEAEAQho1h3CkI0udoIEYRYhoy6UH36DAJGoOcQurR6GiklDoIJZVxUkonCA1ZBQAAAgBACCGFFFJIIYUUUkghhRRiiCGGGHLKKaeggkoqqaiijDLLLLPMMssss8w67KyzDjsMMcQQQyutxFJTbTXWWGvuOeeag7RWWmuttVJKKaWUUgpCQ1YBACAAAARCBhlkkFFIIYUUYogpp5xyCiqogNCQVQAAIACAAAAAAE/yHNERHdERHdERHdERHdHxHM8RJVESJVESLdMyNdNTRVV1ZdeWdVm3fVvYhV33fd33fd34dWFYlmVZlmVZlmVZlmVZlmVZliA0ZBUAAAIAACCEEEJIIYUUUkgpxhhzzDnoJJQQCA1ZBQAAAgAIAAAAcBRHcRzJkRxJsiRL0iTN0ixP8zRPEz1RFEXTNFXRFV1RN21RNmXTNV1TNl1VVm1Xlm1btnXbl2Xb933f933f933f933f931dB0JDVgEAEgAAOpIjKZIiKZLjOI4kSUBoyCoAQAYAQAAAiuIojuM4kiRJkiVpkmd5lqiZmumZniqqQGjIKgAAEABAAAAAAAAAiqZ4iql4iqh4juiIkmiZlqipmivKpuy6ruu6ruu6ruu6ruu6ruu6ruu6ruu6ruu6ruu6ruu6ruu6rguEhqwCACQAAHQkR3IkR1IkRVIkR3KA0JBVAIAMAIAAABzDMSRFcizL0jRP8zRPEz3REz3TU0VXdIHQkFUAACAAgAAAAAAAAAzJsBTL0RxNEiXVUi1VUy3VUkXVU1VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU3TNE0TCA1ZCQAAAQDQWnPMrZeOQeisl8gopKDXTjnmpNfMKIKc5xAxY5jHUjFDDMaWQYSUBUJDVgQAUQAAgDHIMcQccs5J6iRFzjkqHaXGOUepo9RRSrGmWjtKpbZUa+Oco9RRyiilWkurHaVUa6qxAACAAAcAgAALodCQFQFAFAAAgQxSCimFlGLOKeeQUso55hxiijmnnGPOOSidlMo5J52TEimlnGPOKeeclM5J5pyT0kkoAAAgwAEAIMBCKDRkRQAQJwDgcBxNkzRNFCVNE0VPFF3XE0XVlTTNNDVRVFVNFE3VVFVZFk1VliVNM01NFFVTE0VVFVVTlk1VtWXPNG3ZVFXdFlXVtmVb9n1XlnXdM03ZFlXVtk1VtXVXlnVdtm3dlzTNNDVRVFVNFFXXVFXbNlXVtjVRdF1RVWVZVFVZdl1Z11VX1n1NFFXVU03ZFVVVllXZ1WVVlnVfdFXdVl3Z11VZ1n3b1oVf1n3CqKq6bsqurquyrPuyLvu67euUSdNMUxNFVdVEUVVNV7VtU3VtWxNF1xVV1ZZFU3VlVZZ9X3Vl2ddE0XVFVZVlUVVlWZVlXXdlV7dFVdVtVXZ933RdXZd1XVhmW/eF03V1XZVl31dlWfdlXcfWdd/3TNO2TdfVddNVdd/WdeWZbdv4RVXVdVWWhV+VZd/XheF5bt0XnlFVdd2UXV9XZVkXbl832r5uPK9tY9s+sq8jDEe+sCxd2za6vk2Ydd3oG0PhN4Y007Rt01V13XRdX5d13WjrulBUVV1XZdn3VVf2fVv3heH2fd8YVdf3VVkWhtWWnWH3faXuC5VVtoXf1nXnmG1dWH7j6Py+MnR1W2jrurHMvq48u3F0hj4CAAAGHAAAAkwoA4WGrAgA4gQAGIScQ0xBiBSDEEJIKYSQUsQYhMw5KRlzUkIpqYVSUosYg5A5JiVzTkoooaVQSkuhhNZCKbGFUlpsrdWaWos1hNJaKKW1UEqLqaUaW2s1RoxByJyTkjknpZTSWiiltcw5Kp2DlDoIKaWUWiwpxVg5JyWDjkoHIaWSSkwlpRhDKrGVlGIsKcXYWmy5xZhzKKXFkkpsJaVYW0w5thhzjhiDkDknJXNOSiiltVJSa5VzUjoIKWUOSiopxVhKSjFzTkoHIaUOQkolpRhTSrGFUmIrKdVYSmqxxZhzSzHWUFKLJaUYS0oxthhzbrHl1kFoLaQSYyglxhZjrq21GkMpsZWUYiwp1RZjrb3FmHMoJcaSSo0lpVhbjbnGGHNOseWaWqy5xdhrbbn1mnPQqbVaU0y5thhzjrkFWXPuvYPQWiilxVBKjK21WluMOYdSYisp1VhKirXFmHNrsfZQSowlpVhLSjW2GGuONfaaWqu1xZhrarHmmnPvMebYU2s1txhrTrHlWnPuvebWYwEAAAMOAAABJpSBQkNWAgBRAAAEIUoxBqFBiDHnpDQIMeaclIox5yCkUjHmHIRSMucglJJS5hyEUlIKpaSSUmuhlFJSaq0AAIACBwCAABs0JRYHKDRkJQCQCgBgcBzL8jxRNFXZdizJ80TRNFXVth3L8jxRNE1VtW3L80TRNFXVdXXd8jxRNFVVdV1d90RRNVXVdWVZ9z1RNFVVdV1Z9n3TVFXVdWVZtoVfNFVXdV1ZlmXfWF3VdWVZtnVbGFbVdV1Zlm1bN4Zb13Xd94VhOTq3buu67/vC8TvHAADwBAcAoAIbVkc4KRoLLDRkJQCQAQBAGIOQQUghgxBSSCGlEFJKCQAAGHAAAAgwoQwUGrISAIgCAAAIkVJKKY2UUkoppZFSSimllBJCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCAUA+E84APg/2KApsThAoSErAYBwAADAGKWYcgw6CSk1jDkGoZSUUmqtYYwxCKWk1FpLlXMQSkmptdhirJyDUFJKrcUaYwchpdZarLHWmjsIKaUWa6w52BxKaS3GWHPOvfeQUmsx1lpz772X1mKsNefcgxDCtBRjrrn24HvvKbZaa809+CCEULHVWnPwQQghhIsx99yD8D0IIVyMOecehPDBB2EAAHeDAwBEgo0zrCSdFY4GFxqyEgAICQAgEGKKMeecgxBCCJFSjDnnHIQQQiglUoox55yDDkIIJWSMOecchBBCKKWUjDHnnIMQQgmllJI55xyEEEIopZRSMueggxBCCaWUUkrnHIQQQgillFJK6aCDEEIJpZRSSikhhBBCCaWUUkopJYQQQgmllFJKKaWEEEoopZRSSimllBBCKaWUUkoppZQSQiillFJKKaWUkkIppZRSSimllFJSKKWUUkoppZRSSgmllFJKKaWUlFJJBQAAHDgAAAQYQScZVRZhowkXHoBCQ1YCAEAAABTEVlOJnUHMMWepIQgxqKlCSimGMUPKIKYpUwohhSFziiECocVWS8UAAAAQBAAICAkAMEBQMAMADA4QPgdBJ0BwtAEACEJkhkg0LASHB5UAETEVACQmKOQCQIXFRdrFBXQZ4IIu7joQQhCCEMTiAApIwMEJNzzxhifc4ASdolIHAQAAAABwAAAPAADHBRAR0RxGhsYGR4fHB0hIAAAAAADIAMAHAMAhAkRENIeRobHB0eHxARISAAAAAAAAAAAABAQEAAAAAAACAAAABARPZ2dTAAQ6EQAAAAAAANkdsUQCAAAAFCXyIQgwLivDrbq0rPzazzepytxXvRkCV4HzCwB0TauXXgDAzaV27vJGqswgCotQHXi3mGfc5rPbHwO4NOxcaweiyFy9N83AdSA7ADPQCQA41/+pXOle24P/QWCg+AtXt9228X84KGMK1AD0UCgr5HfGt/P9zBJjYDMBTONeDIFr5VaI87QgG8669CKS99qYQS8UgYsAepbk4/65uphc0+k6T7Gb0877r/zqO2+Pyds5xpDHmufMMQBJBg1gnucAdxfZgwjorpZg8pos8RzTxzHyHOv3RcdBgKBUG3nr/Yxszp5/QZVqEv1jSH20Um33cX4TBL4lHzsrd782v62jagi75eWmbcewmIwXmIU7+8bImaQBQCMrLajaAlCprdnklA5JJgFkKiWzacuuXNLbkSDIy8ns4CMvnjYnSAGQupGNtJ+YnaGWvfj0qimBN+4/rLBaq69nrxMAHpYk3GW/vCrpUZzEtfAq9jiOJyBh44ixkaBRQIPWdEIAQGYYya6DclCgBNrqMepsrlX0RP55/iQKbPnBExpaW/0ZSQGHKNqJxGVpAQZeFsDCUDcCNUXQhNXgBi4kXrBEid1QGXzIuwNOALA/8nnZzxXYWYDY4myUZOW2QpMa4MWAkKURqGwoon1m5AYmExkJWmurTRqi0I+rU1Na6glnLesqbYbGz0LLpXYqZ6t+lgTj/boYU/lIThb6wNT/4mwcNtpYiGOWEoAfAItsABqAXiLsGJQkBnRN5Gj2P3ebMe6d9mRZVuPeZBKg91bItLo8AAAPODcJsb76q/bRnQTHYVUe7282MFkN53LRpEzdZC837p4CHgsZstP3ung0Xq0yraJkb0OrST/uhCMFYtksCOHu5pvZiki1xZ9aw1c1CFsl+P6MC/Z0DdOATkomT86XqlM3kOvHreLduo9H63nnS536RibylQD+lYTlWmzGMNfkxvEr8MebjHrXIkWnqyWAQgYNQC/LipFlZAEVm400+45+/l8oO9T+y5p4xdsaEYjaBjeEO/5MelX9Z5gUgc6cX2+1Es/U7ST/3uf9C2EgNLG0yl81SbQSnvwdDNgMYOLnec44qxhLVTOx/958gHXiBXcKj2AWymw+FlmkMG6eYZ0cU1mUxoh5Tq6xQOnHjrht8kiOdmOTbFzSXJNK3i2Rd0aWzCmdIjGcGwD+lWz1+eNCwTvyzArw3Gds9Bhgntn7k6DHSJCmAkCPkWY7lGExGMD+5tn15QhPfbAsf4dT2pqhGq7gUd9Ieck9KtXVmP2GherPhaQugfx7UWfWTMz342yjpXwprW8RQQVDqLafeSN0MwDAdW7443+qBUAFw4vSflLmVNgJyTyCpba8nWWlKeCwP1p1dfXnLWoAPhL2TgBQuKNdhpJ3Z2mZdwE0ZXkZwBlnVQBV";

const Rhythm = (props) => {
  const speed = props.speed;
  const isLongPressing = props.isLongPressing;
  const [isPlaying, setIsPlaying] = useState(false);
  const reached = useRef(true);
  const interval = useRef();
  const timeout = useRef();
  const [index, setIndex] = useState(-1);
  const [beat, setBeat] = useState(4);
  const [stressFirstBeat, setStressFirstBeat] = useState(false);
  const beatRange = [2, 3, 4, 5, 6];

  if (!props.node) {
    document.addEventListener("keyup", (e) => {
      if (e.key === " ") {
        onClickHandler();
        console.log(e.key);
      }
    });
  }

  useEffect(() => {
    if (isPlaying) {
      playMetronome();
    } else {
      clearInterval(interval.current);
      clearTimeout(timeout.current);
    }
  }, [speed, isPlaying, isLongPressing, index]);

  const playMetronome = () => {
    var bufferLoader = new BufferLoader(context, [r2, r], finishedLoading);

    bufferLoader.load();
  };

  const finishedLoading = (bufferList) => {
    clearInterval(interval.current);
    interval.current = setInterval(() => {
      play(bufferList);
      console.log("interval");
    }, 60000 / speed);

    if (isLongPressing && reached.current) {
      timeout.current = setTimeout(() => {
        reached.current = true;
        play(bufferList);
      }, 60000 / speed);
      reached.current = false;
    }

    if (!isLongPressing) {
      clearTimeout(timeout.current);

      console.log("clear timeout");
      reached.current = true;
    }
  };

  const play = (bufferList) => {
    var source1 = context.createBufferSource();
    source1.buffer = bufferList[0];
    source1.connect(context.destination);
    // source1.start(0);

    var source2 = context.createBufferSource(); // accent
    source2.buffer = bufferList[1];
    source2.connect(context.destination);
    // source2.start(0);

    setIndex((prev) => (prev + 1) % beat);
    console.log(stressFirstBeat);
    console.log(index % beat);
    if (stressFirstBeat && (index + beat) % beat == beat - 1) {
      console.log("play accent");
      source2.start(0);
    } else {
      source1.start(0);
    }
  };

  const onClickHandler = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleStressChange = (e) => {
    if (e.key === " ") {
      e.preventDefault();

      return;
    }
    setStressFirstBeat((prev) => !prev);
  };

  const onDecreaseBeatHandler = () => {
    setBeat((prev) => (beatRange.includes(prev - 1) ? prev - 1 : prev));
  };

  const onIncreaseBeatHandler = () => {
    setBeat((prev) => (beatRange.includes(prev + 1) ? prev + 1 : prev));
  };
  return (
    <div>
      <ImageMove index={index} beat={beat} node={props.node} />
      <div className="metronome-icons">
        <IconList beat={beat} index={index} />
      </div>
      <div className="play-btn" onClick={onClickHandler}>
        <button className={`button ${isPlaying ? "paused" : ""}`}></button>
      </div>
      <hr />
      <div className="tools-container">
        <div className="first-beat-checkbox">
          <label>
            Stress First Beat
            <br />
            第一拍重拍
            <input
              type="checkbox"
              checked={stressFirstBeat}
              onChange={handleStressChange}
              onKeyUp={handleStressChange}
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="beat-container">
          <div className="small-minus" onClick={onDecreaseBeatHandler}>
            <span>-</span>
          </div>
          <div className="beat">{beat}</div>
          <div className="small-plus" onClick={onIncreaseBeatHandler}>
            <span>+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rhythm;

// https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API
