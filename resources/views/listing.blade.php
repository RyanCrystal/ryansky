{{$heading}}




@foreach($listings as $listing)
  <h2>{{$listing['title']}}</h2>
  <h3>{{$listing['tag']}}</h3>
  <h3>{{$listing['company']}}</h3>
  <h3>{{$listing['location']}}</h3>
  <h3>{{$listing['website']}}</h3>
@endforeach
