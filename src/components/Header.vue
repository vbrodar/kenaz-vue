<template>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">


    <link rel="stylesheet" type="text/css" href="slick/slick.css"/>
    <link rel="stylesheet" type="text/css" href="slick/slick-theme.css"/>


    <!-- Google Fonts -->
    
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Bitter:wght@400;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Varela+Round:wght@400;700&display=swap" rel="stylesheet">

    <!-- Seperated .scss files -->

    <link rel="stylesheet" href="style/style.css">
    <link rel="stylesheet" href="style/header.css">
    <link rel="stylesheet" href="style/sidebar.css">
    <link rel="stylesheet" href="style/footer.css">

    </head>


<header>
    <title>Kenaz Website</title>
    <nav class="main-nav">
        <div class="logo-container">
            <img class="logo" src="@/assets/logo.svg" alt="logo">
         <a href="./index.html" target="_blank"><h1 class="main-title">Kenaz</h1></a> 
        </div>
    <div>
    <ul class="main-nav-ul">
        <a href="./category.html" target="_blank"><li>Media</li></a>
        <a href="./category.html" target="_blank"><li>Marketing</li></a>
        <a href="./category.html" target="_blank"><li>Contact</li></a>
        <li><img class="search-logo" src="@/assets/search.svg" alt="search-logo"></li>
        
    </ul>
    </div>
    </nav>
    
    <nav class="sub-nav">
        <ul class="sub-nav-ul">
            <div class="news-colored-div">
            <span class="news-sub-span"><a href="">News</a></span></div>
            <li><a href="./category.html" target="_blank" class="sub-nav-links" id="business" >Business </a></li>
            <li><a href="./category.html" target="_blank" class="sub-nav-links" id="sport" >Sport</a></li>
            <li><a href="./category.html" target="_blank" class="sub-nav-links" id="life">Life</a></li>
            <li><a href="./category.html" target="_blank" class="sub-nav-links" id="tech" >Tech</a></li>
            <li><a href="./category.html" target="_blank" class="sub-nav-links" id="travel" >Travel</a></li>
        </ul>
    </nav>

</header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss" scoped>
@import "@/style/header.scss";
@import "@/style/style.scss";
</style>
