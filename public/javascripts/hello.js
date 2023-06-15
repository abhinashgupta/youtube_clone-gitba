let api_key = "AIzaSyAusnucgKG6hALHq7hNiPF2-_lrY321pl0";
let video_http = "https://www.googleapis.com/youtube/v3/videos?";
let channel_http = "https://www.googleapis.com/youtube/v3/channels?";

fetch(
  video_http +
    new URLSearchParams({
      key: api_key,
      part: "snippet",
      chart: "mostPopular",
      maxResults: 100,
      regionCode: "IN",
    })
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.items.forEach(item => {
      getChannelIcon(item);
    })
  });
// .catch (err => console.log(err));

const getChannelIcon = (video_data) => {
  fetch(channel_http + new URLSearchParams({
    key: api_key,
    part: 'snippet',
    id: video_data.snippet.channelId
  }))
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url
      // console.log(video_data);
      makeVideoCard(video_data);
  })
}


var clutter ="";
const makeVideoCard = (data) => {
  clutter += `
  <div class="vid-list" onclick="location.href = 'http://youtube.com/watch?v=${data.id}'">
        <a href='http://youtube.com/watch?v=${data.id}'><img src="${data.snippet.thumbnails.high.url}" class="thumbnail"></a>
        <div class="flex-div">
          <img src="${data.channelThumbnail}">
          <div class="vid-info">
            <a href='http://youtube.com/watch?v=${data.id}'>${data.snippet.title}</a>
            <p onclick="location.href = 'http://youtube.com/watch?v=${data.id}'>${data.snippet.channelTitle}</p>
            <p onclick="location.href = 'http://youtube.com/watch?v=${data.id}'>15k Views &bull; 2 days</p>
          </div>
        </div>
      </div>`;
  document.querySelector(".list-container").innerHTML=clutter;
};

//searchbar

const searchInput = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');
let searchLink = "https://www.youtube.com/results?search_query=";

searchBtn.addEventListener('click', () => {
  if (searchInput.value.length) {
    location.href = searchLink + searchInput.value;
  }
})