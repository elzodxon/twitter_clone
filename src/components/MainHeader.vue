<template>
  <section class="top">
    <div class="container">
      <header class="header">
        <a class="logo" href="">
          <img src="image/logo.svg" alt="logo">
        </a>
        <nav class="nav" :class="{'active': isOpen}">
          <a href="" class="nav__link">About Company</a>
          <a href="" class="nav__link">Services</a>
          <a href="" class="nav__link">Projects</a>
          <a href="" class="nav__link">Delivery and payments</a>
          <a href="" class="nav__link">Contact</a>
          <a href="" class="nav__link nav__link_yellow">
            Choose
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="11" fill="#FFC94F"/>
              <path d="M14.816 12.568H12.112V15.208H9.648V12.568H6.928V10.232H9.648V7.592H12.112V10.232H14.816V12.568Z" fill="#535353"/>
            </svg>
          </a>
          <a href="" mailto="info@i-lights.ru" class="nav__link ">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5832 4.25004C15.5832 3.47087 14.9457 2.83337 14.1665 2.83337H2.83317C2.054 2.83337 1.4165 3.47087 1.4165 4.25004V12.75C1.4165 13.5292 2.054 14.1667 2.83317 14.1667H14.1665C14.9457 14.1667 15.5832 13.5292 15.5832 12.75V4.25004ZM14.1665 4.25003L8.49982 7.7917L2.83316 4.25003H14.1665ZM14.1665 12.75H2.83316V5.6667L8.49982 9.20836L14.1665 5.6667V12.75Z" fill="#FFC94F"/>
            </svg>
            info@elzodxon.uz
          </a>

          <a class="nav__link btn" href="">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
                <path d="M0.799805 2.33338C0.799805 1.92672 0.961349 1.5367 1.24891 1.24915C1.53646 0.961593 1.92648 0.800049 2.33314 0.800049H4.8478C5.00864 0.800169 5.16537 0.850873 5.29581 0.944985C5.42624 1.0391 5.52378 1.17185 5.5746 1.32445L6.72307 4.76908C6.78126 4.94414 6.77438 5.13431 6.70369 5.30471C6.633 5.4751 6.50323 5.6143 6.3382 5.69674L4.60784 6.56308C5.45601 8.44029 6.95956 9.94381 8.83676 10.792L9.70308 9.06165C9.78556 8.89661 9.92476 8.76685 10.0952 8.69613C10.2656 8.62549 10.4557 8.61861 10.6308 8.67677L14.0754 9.82525C14.2281 9.87613 14.361 9.97373 14.4551 10.1044C14.5492 10.2349 14.5998 10.3918 14.5998 10.5528V13.0667C14.5998 13.4734 14.4383 13.8634 14.1507 14.1509C13.8632 14.4385 13.4732 14.6 13.0664 14.6H12.2998C5.94874 14.6 0.799805 9.45109 0.799805 3.10005V2.33338Z" stroke="#FFC94F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="16" height="16" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            +99891 123 67 89
          </a>

          <span @click="isOpen = !isOpen"  id="close-burger">
                  +
                </span>
        </nav>
        <span @click="isOpen = !isOpen"  id="burger">
                <svg width="29" height="19" viewBox="0 0 29 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="9.5" x2="29" y2="9.5" stroke="#FFC94F"/>
                    <line y1="18.5" x2="29" y2="18.5" stroke="#FFC94F"/>
                    <line y1="0.5" x2="29" y2="0.5" stroke="#FFC94F"/>
                    <line y1="0.5" x2="29" y2="0.5" stroke="black" stroke-opacity="0.2"/>
                    </svg>

            </span>
      </header>

    </div>
  </section>

</template>

<script>
export default {
  name: "MainHeader",
  data(){
    return{
      isOpen: false,
    }
  },
  watch:{
    isOpen(){
      if (this.isOpen){
        document.body.style.overflow="hidden"
      } else {
        document.body.style.overflow="scroll"
      }
    }
  }
}
</script>

<style lang="scss">
$darkGrey:  #535353;
$yellow: #FFC94F;
$primary: #0C0537;
$milk: #EFEFEF;
$blue: #3D4F64;
$grey: #8C8C8C;
// Header
.top{
  background: #0C0537;
  padding: 13px;
}

.header{
  display: flex;
  align-items: center;
  justify-content: space-between;

  .nav{
    display: flex;
    &__link{
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: Montserrat, sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: #FFFFFF;
      text-decoration: none;
      transition: all 0.2s;

      &_yellow{
        color: $yellow;
      }
      &:hover{
        color: $yellow;
      }

      &:not(:first-child){
        margin-left: 40px;
      }
    }

    .btn{
      padding: 14px 20px;
      border: 1px solid $milk;
      transition: all 0.2s;
      border-radius: 4px;

      &:hover{
        background-color: $milk;
        color: $primary;
      }
    }
    #close-burger{
      display: none;
    }


  }

  #burger{
    display: none;
  }
}



@media only screen and (max-width: 1200px){
  .header {
    .nav{
      .btn{
        display: none;
      }
    }
  }
}

@media only screen and (max-width: 992px){
  .header {
    .nav{
      display: block;
    }

    .nav{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 22;
      background-color: $primary;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      justify-content: center;
      transform: translate(100%);
      transition: all 0.2s;
      .nav__link{
        font-size: 16px;
        margin: 0;


        &_yellow{
          position: relative;
          padding-bottom: 20px;
          width: 100%;
          font-weight: 600;
          display: flex;
          justify-content: center;
          &::after{
            content: '';
            position: absolute;
            right: 10px;
            left: 10px;
            bottom: 0;
            max-width: 100%;
            height: 1px;
            background-color: $grey;
          }
        }
      }

      .btn{
        display: block;
      }

      #close-burger{
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 50px;
        font-weight: 600;
        transform: rotate(45deg);
        display: block;
        color: $yellow;
        transition: all 0.2s;
        cursor: pointer;

        &:hover{
          transform: rotate(90deg);
        }
      }

    }

    #burger{
      display: block;
      cursor: pointer;
    }

    .nav.active{
      transform: translate(0);
    }
  }
}
</style>
