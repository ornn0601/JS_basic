let news = [];
let page = 1;
let total_pages = 0;
let menus = document.querySelectorAll('.menus button');
let searchButton = document.getElementById("search-button");
let url; // 전역변수로 만든다.

/* 리펙토링
각 함수에서 필요한 url을 만든다.
api호출 함수를 부른다
*/

const getNews = async ()=> {
  try {
    let header = new Headers({'x-api-key' : '6hFzs__u0LySFevSajqafqSwoFNBh4GmSZNfZPlEfC4'});
    url.searchParams.set('page', page); // 쿼리에 page 추가

    let response = await fetch(url, {headers : header});
    let data = await response.json(); // data type json으로 변경
    if (response.status == 200) {
      if (data.total_hits == 0) {
        throw new Error("검색된 결과값이 없습니다.");
      }
      news = data.articles;
      total_pages = data.total_pages;
      page = data.page;
      render();
      pagenation();
    } else {
      throw new Error(data.message);
    }
  } catch(error) {
    console.log("잡힌 에러는", error.message);
    errorRender(error.message);
  }
};

// 메뉴 버튼 클릭 이벤트 연결
menus.forEach(menu => menu.addEventListener("click", (event)=> getNewsByTopic(event)));

// 뉴스 가져오기
const getLatestNews = async ()=> {
  url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=sport&page_size=10`);
  getNews();
}

// 버튼 검색
const getNewsByTopic = async (event) => {
  let topic = event.target.textContent.toLowerCase();
  url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&page_size=10&topic=${topic}`);
  getNews();
};

const getNewsByKeyword = async ()=> {
  let keyword = document.getElementById("search-input").value;
  
  url = new URL(`https://api.newscatcherapi.com/v2/search?countries=KR&page_size=10&q=${keyword}`);
  getNews();
}

// 화면 그리기
const render = ()=> {
  let newsHTML = '';

  newsHTML = news.map((item) => {
    return `<div class="row news">
    <div class="col-lg-4">
      <img class="news-img-size" src="${item.media}" alt="">
    </div>
    <div class="col-lg-8">
      <h2>${item.title}</h2>
      <p>${item.summary}</p>
      <div>
        ${item.rights} | ${item.published_date}
      </div>
    </div>
  </div>`
  }).join('');

  document.getElementById("news-board").innerHTML = newsHTML;
}

const errorRender = (message)=> {
  let errorHTML = `<div class="alert alert-danger text-center" role="alert">${message}</div>`;
  document.getElementById("news-board").innerHTML = errorHTML;
}

const pagenation = ()=> {
  let pagenationHTML = ``;
  let pageGroup = Math.ceil(page / 5);
  let last = pageGroup * 5;
  let first = last - 4;

  // total page 3개일 경우 3개의 페이지만 프린트 하는 방법
  // << >> 맨 처음과 맨 끝 페이지로 이동하는 버튼
  // 내가 그룹1 일때 << < 이 버튼이 없다.
  // 내가 마지막 그룹일때 >> > 이 버튼이 없다.

  pagenationHTML = `<li class="page-item">
      <a class="page-link" href="#" aria-label="Previous" onClick="moveToPage(${page-1})">
        <span aria-hidden="true">&lt;</span>
      </a>
    </li>`;

  for (let i = first; i <= last; i++) {
    pagenationHTML += `<li class="page-item ${page==i?"active":""}"><a class="page-link" href="#" onClick="moveToPage(${i})">${i}</a></li>`;
  }

  pagenationHTML += `<li class="page-item">
      <a class="page-link" href="#" aria-label="Next" onClick="moveToPage(${page+1})">
        <span aria-hidden="true">&gt;</span>
      </a>
    </li>`;
  

  document.querySelector(".pagination").innerHTML = pagenationHTML;
}

const moveToPage = (pageNum)=> {
  page = pageNum;
  getNews();
}

// 검색 : 호이스팅 문제를 해결하기 위해 하단에 위치한다.
searchButton.addEventListener("click", getNewsByKeyword);
getLatestNews();