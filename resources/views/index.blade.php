<!-- all content are handeling by react component -->
<!-- included here layouts.layout -->
@extends('.layouts.layout')
@section('contents')
@section('title', "Rick and Morty wiki")

<!-- @php
 (!is_connected()) ? die("internet connection is absent") : ""
@endphp -->

    @if(count($jsonValue) > 0)
        @foreach($jsonValue as $key => $data)
            {{-- {{ $data }} <br/> --}}
        @endforeach
    @endif

@endsection