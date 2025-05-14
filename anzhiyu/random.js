var posts=["2025/05/14/这是一篇新的博文/","2025/05/13/骗骗喜欢你/","2025/05/13/唐探1900/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };