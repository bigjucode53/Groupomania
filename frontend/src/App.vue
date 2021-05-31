<template>
  <div>
    <router-view />
    <footer>  
      
      <div class="social">
                       
                        <ul class="social">
                            <li class="col-sm-3">
                                <a class="social__item" href="https://twitter.com/" title="Twitter" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                            </li>
                            <li class="col-sm-3">
                                <a class="social__item" href="https://www.facebook.com/" title="Facebook" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                            </li>
                            <li class="col-sm-3">
                                <a class="social__item" href="https://www.instagram.com/" title="Instagram" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                            </li>
                            <li class="col-sm-3">
                                <a class="social__item" href="https://www.linkedin.com/" title="LinkedIn" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                            </li>
                        </ul>           
 </div>
      <p>Copyright © 2021 Tous droits réservés | BigjuCode ;)</p>
     
    </footer>
  </div>
</template>


<style lang="scss">


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #192a48;
  background-color: white;
}

#nav {
  display: flex;
  justify-content: space-between;
  background-color: #192a48;
  height: 60px;
  padding: 20px;


  p {
    
    color: white; 
  }


  .links {
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-between;
    list-style: none;
    // width: 30%;
  }


  li {
    margin-right: 20px;
  }


  a {
    font-weight: bold;
    color: white;
    text-decoration: none;

    &.router-link-exact-active {
      color: #f41731;
    }
  }

  a:hover {
    border-bottom: 2px solid white;
  
  }
}


footer {
 
  background-color: #192a48;
  color: white;
  height: 90px;
  padding: 90px;
  margin-top: 0px;
}

.social {
    margin: 20px 0 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    list-style: none;
    padding:0;
    &__item {
        color: #FFF!important;
    }
    & li {
      margin: 10px;
        font-size: 1.8em;
        padding: 0;
        opacity: 0.7;
        border-radius: 50%;
        transition: all 0.3s ease-in-out;
        &:hover {
            opacity: 1;
        }
    }
}  

</style>
