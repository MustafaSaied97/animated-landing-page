<template>
  <section class="container section">
    <article class="article-1">
      <video autoplay muted loop id="myVideo" class="article-1__video">
        <source src="~/assets/Animation/main_head.mp4" type="video/mp4" />
      </video>
      <div class="article-1__header">
        <div class="header__icon">
          <ASCLogoMainIcon />
        </div>

        <h2 class="header__text">
          <span class="header__text__title header__text__title--normal">
            Arabian for Science and Technology Co.
          </span>

          <span class="header__text__title header__text__title--bold">
            Innovate Local. Impact Global.
          </span>
        </h2>
      </div>
    </article>
    <article class="article-2">
      <h2 class="article-2__main-title">Now Introducing</h2>
      <div class="article-2__header">
        <h3 class="article-2__header__features">New Strategy. New Identity. New Website.</h3>
        <h3 class=" ">Soon</h3>
      </div>
      <ClientOnly>
        <AnimatedGridsSection />
      </ClientOnly>
    </article>
  </section>
</template>

<script setup></script>
<style scoped>
.section {
  color: #465ae5;
  display: flex;
  height: 100svh;
  flex-direction: column;
  overflow-y: auto;
  justify-content: space-between;
  overflow-x: hidden;
  gap: 0px;

  @media (min-width: 1280px) {
    gap: 50px;
  }
  @media (min-width: 1880px) {
    justify-content: start;
    gap: 0px;
  }
}
.article-1 {
  position: relative;
  width: 100%;
  padding-top: 58px;
  @media (min-width: 1280px) {
    height: fit-content;
    padding-top: 58px;
  }
  @media (min-width: 1880px) {
    height: 661px;
    padding-top: 150px;
  }
  .article-1__video {
    position: absolute;
    top: 0px;
    z-index: -20;
    width: 150%;
    max-height: 100vh;
    left: 50%;
    transform: translateX(-50%);

    @media (min-width: 1280px) {
      width: 100%;
    }
  }
  .article-1__header {
    position: relative;
    display: flex;
    width: 100%;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: start;
    gap: 39px;
    @media (min-width: 1280px) {
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: flex-start;
      gap: 100px;
      justify-content: center;
      padding-inline-start: 0px;
    }
    @media (min-width: 1600px) {
      gap: 338.1px;
      justify-content: start;
      padding-inline-start: 93px;
    }
    .header__icon {
      height: 55px !important;
      width: 106px !important;
       margin-bottom: 0px;
      @media (min-width: 1280px) {
        height: 150px !important;
        width: 300px !important;
      }
      @media (min-width: 1600px) {
        height: 209px !important;
        width: 400.09px !important;
        margin-bottom: 12px;
      }
      svg {
        height: 100%;
        width: 100%;
      }
    }
    .header__text {
      margin-top: 0px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 18px;

      @media (min-width: 1280px) {
        align-self: flex-end;
        gap: 0px;
      }
      @media (min-width: 1600px) {
        align-items: start;
      }

      .header__text__title {
        color: #18264a;
        font-size: 30px;
        font-style: normal;
        font-weight: 400;
        line-height: 105%;
        letter-spacing: 0.3px;
        text-align: center;
        display: inline-block;
        @media (min-width: 1280px) {
          font-size: 40px;
          font-weight: 300;
          line-height: 95%;
          letter-spacing: 0.52px;
          text-align: start;
        }
        @media (min-width: 1600px) {
          font-size: 52px;
        }
      }
      .header__text__title--normal {
        width: 300px;
        font-weight: 400;

        @media (min-width: 1280px) {
          font-weight: 300;
          width: auto;
        }
      }
      .header__text__title--bold {
        font-weight: 600;
        width: 200px;
        @media (min-width: 1280px) {
          font-weight: 500;
          width: auto;
        }
      }
    }
  }
}

.article-2 {
  margin-bottom: 47.52px;
  margin-top: 96px;
  @media (min-width: 1280px) {
    margin-bottom: 10px;
    margin-top: 20px;
  }
  @media (min-width: 1600px) {
    margin-bottom: 69.07px;
    margin-top: 0px;
  }
  .article-2__main-title {
    font-family: '29LT Zarid Sans AL';
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 105%;
    letter-spacing: 0.18px;
    @media (min-width: 1280px) {
      font-size: 24px;
      letter-spacing: 0.24px;
    }
  }
  .article-2__header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 5px;
    @media (min-width: 1280px) {
      margin-top: 8px;
      align-items: center;
    }
    h3 {
      margin: 0;
      font-style: normal;
      font-size: 30px;
      font-weight: 400;
      line-height: 105%; /* 31.5px */
      letter-spacing: 0.3px;
      @media (min-width: 1280px) {
        font-size: 40px;
        font-weight: 300;
        line-height: 95%;
        letter-spacing: 0.52px;
      }
      @media (min-width: 1600px) {
        font-size: 52px;
      }
    }
    .article-2__header__features {
      max-width: 150px;
      @media (min-width: 1280px) {
        max-width: initial;
      }
    }
  }
}
</style>
