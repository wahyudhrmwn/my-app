<template>
    <div class="container">
      <meta>
      <div class="row1">
        <div class="columns columns1">
          <div class="column column1-row1 is-two-fifths">
            <div class="box border-box-column1">
              <div class="box box1-column1-row1">Admin : Wahyu Dharmawan</div>
              <div class="box box2-column1-row1">Email : wahyu.dhrmwn08@gmail.com</div>
            </div>
          </div>
          <div class="column column2-row1 is-two-fifths">
            <div class="box border-box-column2">
              <div class="posisiLoket">Anda di Loket 1</div>
              <div>
                <div class="col">Loket 1</div>
                <div class="col">Loket 2</div>
                <div class="col">Loket 3</div>
              </div>
              <div>
                <div class="col-icon">
                  <font-awesome-icon icon="fa-solid fa-circle-check" />
                </div>
                <div class="col-icon">
                  <font-awesome-icon icon="fa-solid fa-circle-xmark" />
              </div>
                <div class="col-icon">
                  <font-awesome-icon icon="fa-solid fa-circle-xmark" />
              </div>
              </div>
            </div>
          </div>
          <div class="column column3-row1">
            <div class="row1-col3">
              <div class="box box1-column3-row1">Minggu, 31 Desember 2023</div>
            </div>
            <div class="row1-col3">
              <div class="box box2-column3-row1">Reset Antrian</div>
            </div>
            <div class="row1-col3">
              <div class="box box3-column3-row1">Logout</div>
            </div>
          </div>
        </div>
      </div>
      <div class="row2">
        <div class="columns columns2">
          <div class="column is-one-thirds column1-row2">
              <div class="box box1-row2-column1">LOKET 1</div>
              <div class="box box2-row2-column1">Wahyu Dharmawan</div>
              <div class="box box3-row2-column1">19</div>
              <div class="box box4-row2-column1">Antrian Selanjutnya</div>
          </div>
          <div class="column is-one-thirds column2-row2">
              <div class="box box1-row2-column1">LOKET 2</div>
              <div class="box box2-row2-column1">Amri K</div>
              <div class="box box3-row2-column1">20</div>
              <!-- <div class="box box4-row2-column1">Antrian Selanjutnya</div> -->
          </div>
          <div class="column is-one-thirds column3-row2">
              <div class="box box1-row2-column1">LOKET 3</div>
              <div class="box box2-row2-column1">Galih J</div>
              <div class="box box3-row2-column1">18</div>
              <!-- <div class="box box4-row2-column1">Antrian Selanjutnya</div> -->
          </div>
        </div>
      </div>
  
      <div class="row3">
        <div class="columns columns3">
          <div class="column is-one-quarter nextQueue">Antrian yang sedang menunggu</div>
          <div class="column queue">
            <div class="box box-queue">21</div>
          </div>
          <div class="column queue"><div class="box box-queue">22</div></div>
          <div class="column queue"><div class="box box-queue">23</div></div>
          <div class="column queue"><div class="box box-queue">24</div></div>
          <div class="column queue"><div class="box box-queue">25</div></div>
          <div class="column queue"><div class="box box-queue">26</div></div>
          <div class="column queue"><div class="box box-queue">27</div></div>
          <div class="column queue"><div class="box box-queue">28</div></div>
          <div class="column queue"><div class="box box-queue">29</div></div>
          <div class="column queue"><div class="box box-queue">30</div></div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup></script>
  
  <style scoped>

  @media (min-width: 1260px) and (min-height: 700px) {
    .container {
      height: 100vh;
      width: 100%;
    }

    .container {
      height: 100vh;
      width: 100%;
    }
    
    
    .column3-row1 {
      text-align: center;
    }
    
    .column2-row1 {
      text-align: center;
    }
    
    .column1-row1 {
      text-align: -webkit-center;
    }
    
    .box1-column1-row1 {
      margin: 0;
      width: 95%;
      height: 40%;
      margin-top: 2%;
      margin-bottom: 3%;
      border-radius: 15px;
      background-color: #dfeffa;
      font-weight: 600;
      font-size: 10px;
      color: #2a2f4f;
      padding-top: 5%;
    }
    
    .box2-column1-row1 {
      border-radius: 15px;
      background-color: #dfeffa;
      font-weight: 600;
      color: #2a2f4f;
      margin: 0;
      width: 95%;
      height: 40%;
      padding-top: 5%;
      font-size: 10px;
    }
    
    .box1-column3-row1,
    .box2-column3-row1,
    .box3-column3-row1 {
      border-radius: 30px;
      padding: 5%;
    }
    
    .box1-column3-row1 {
      font-size: 12px;
      background-color: #2a2f4f;
      color: #dfeffa;
      font-weight: 500;
    }
    
    .box2-column3-row1 {
      font-size: 12px;
      cursor: pointer;
      background-color: #eb6e6e;
      font-weight: 800;
      color: #dfeffa;
    }
    
    .box3-column3-row1 {
      font-size: 12px;
      cursor: pointer;
      background-color: #0d42ff;
      font-weight: 800;
      color: #dfeffa;
    }
    
    
    .row1-col3 {
      width: 100%;
      height: 30%;
      margin-bottom: 7%;
    }
    .row1 {
      width: 100%;
      height: 30vh;
    }
    
    .row {
      width: 100%;
    }
    
    .col {
      float: left;
      width: 33.33333333%;
      border-bottom: solid #dfeffa 1px;
      margin-top: 3%;
      color: #dfeffa;
      font-size: 17px;
      padding: 0;
    }
    
    .col-icon {
      float: left;
      width: 33.33333333%;
      margin-top: 1%;
      color: #dfeffa;
      font-size: 50px;
    }
    
    .posisiLoket {
      color: #dfeffa;
      font-weight: bold;
      font-size: 16px;
      padding-top: 0;
      margin-top: 0;
      margin-bottom: 1%;
    }
    
    .row2 {
      width: 100%;
      height: 55vh;
    }
    
    .row3 {
      width: 100%;
      height: 15vh;
    }
    
    .columns {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
    }
    
    .columns:last-child {
      margin-bottom: 0;
    }
    
    .columns1,
    .columns2 {
      height: 100%;
      padding: 10px;
      gap: 0.5rem;
    }
    
    .columns3 {
      height: 100%;
      padding: 10px;
      gap: 0.15rem;
    }
    
    
    
    .is-one-thirds {
      padding: 5px;
    }
    
    
    .border-box-column1 {
      height: 100%;
      background-color: #2a2f4f;
      border-radius: 15px;
    }
    .border-box-column2 {
      height: 100%;
      background-color: #2a2f4f;
      border-radius: 15px;
      padding: 3%;
    }
          
    .box1-row2-column1 {
        margin: 0;
        margin-bottom: 1%;
        border-radius: 0px;
        padding: 3%;
        background-color: #dfeffa;
        font-weight: 700;
        color: #2a2f4f;
        font-size: 15px;
    }
    
    .box2-row2-column1 {
        border-radius: 0px;
        padding: 3%;
        background-color: #dfeffa;
        font-weight: 700;
        color: #2a2f4f;
        margin-bottom: 5%;
        font-size: 15px;
    }
    
    .box3-row2-column1 {
        height:50%;
        width: 60%;
        border-radius: 15px;
        background-color: #dfeffa;
        font-weight: 700;
        font-size: 70px;
        padding-top: 9%;
        color: #2a2f4f;
        margin-bottom: 5%;
    }
    
    .box4-row2-column1 {
        height: 10%;
        width: 65%;
        border-radius: 30px;
        padding: 2%;
        font-size: 14px;
        background-color: #0d42ff;
        font-weight: bold;
        color: #dfeffa;    
    }
    
    .column1-row2 {
        text-align: -webkit-center;
        background-color: #2a2f4f;
        border-radius: 5px;
    }
    
    .column2-row2 {
        text-align: -webkit-center;
        background-color: #2a2f4f;
        border-radius: 5px;
    }
    
    .column3-row2 {
        text-align: -webkit-center;
        background-color: #2a2f4f;
        border-radius: 5px;
    }


    .nextQueue {
      margin-right: 1%;
      text-align: center;
      padding-top: 2.5%;
      background-color: #2a2f4f;
      color: #dfeffa;
      font-weight: 800;
      border-radius: 5px;
      font-size: 14px;
    }

    .box-queue {
      width: 100%;
      height: 100%;
      padding: 0;
      padding-top: 30%;
      border-radius: 15px;
      font-weight: 800;
      color: #2a2f4f;
      background-color: #dfeffa;
    }

    .queue {
      background-color: #2a2f4f;
      text-align: center;
      padding: 1%;
      border-radius: 15%;
    }
  }
  
  @media (min-width: 1360px) and (min-height: 600px) {
    .container {
        height: 100vh;
        width: 100%;
      }
      
      .column3-row1 {
        text-align: center;
      }
      
      .column2-row1 {
        text-align: center;
      }
      
      .column1-row1 {
        text-align: -webkit-center;
      }
      
      .box1-column1-row1 {
        margin: 0;
        width: 95%;
        height: 45%;
        margin-top: 0px;
        margin-bottom: 3%;
        border-radius: 15px;
        background-color: #dfeffa;
        font-weight: 600;
        font-size: 10px;
        color: #2a2f4f;
        padding-top: 4%;
      }
      
      .box2-column1-row1 {
        border-radius: 15px;
        background-color: #dfeffa;
        font-weight: 600;
        color: #2a2f4f;
        margin: 0;
        width: 95%;
        height: 45%;
        padding-top: 4%;
        font-size: 10px;
      }
      
      .box1-column3-row1,
      .box2-column3-row1,
      .box3-column3-row1 {
        border-radius: 20px;
        padding: 7px;
      }
      
      .box1-column3-row1 {
        font-size: 12px;
        background-color: #2a2f4f;
        color: #dfeffa;
        font-weight: 500;
      }
      
      .box2-column3-row1 {
        font-size: 12px;
        cursor: pointer;
        background-color: #eb6e6e;
        font-weight: 800;
        color: #dfeffa;
      }
      
      .box3-column3-row1 {
        font-size: 12px;
        cursor: pointer;
        background-color: #0d42ff;
        font-weight: 800;
        color: #dfeffa;
      }
      
      
      .row1-col3 {
        width: 100%;
        height: 30%;
        margin-bottom: 5%;
      }
      .row1 {
        width: 100%;
        height: 30vh;
      }
      
      .row {
        width: 100%;
      }
      
      .col {
        float: left;
        width: 33.33333333%;
        border-bottom: solid #dfeffa 1px;
        margin-top: 3px;
        color: #dfeffa;
        font-size: 14px;
        padding: 0;
      }
      
      .col-icon {
        float: left;
        width: 33.33333333%;
        margin-top: 1%;
        color: #dfeffa;
        font-size: 40px;
      }
      
      .posisiLoket {
        color: #dfeffa;
        font-weight: bold;
        font-size: 15px;
        padding-top: 0;
        margin-top: 0;
        margin-bottom: 1%;
      }
      
      .row2 {
        width: 100%;
        height: 55vh;
      }
      
      .row3 {
        width: 100%;
        height: 15vh;
      }
      
      .columns {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
      }
      
      .columns:last-child {
        margin-bottom: 0;
      }
      
      .columns1,
      .columns2 {
        height: 100%;
        padding: 10px;
        gap: 0.5rem;
      }
      
      .columns3 {
        height: 100%;
        padding: 10px;
        gap: 0.15rem;
      }
      
      
      
      .is-one-thirds {
        padding: 5px;
      }
      
      
      
      .border-box-column1 {
        height: 100%;
        background-color: #2a2f4f;
        border-radius: 15px;
      }
      .border-box-column2 {
        height: 100%;
        background-color: #2a2f4f;
        border-radius: 15px;
        padding: 3%;
      }
            
      .box1-row2-column1 {
          margin: 0;
          margin-bottom: 1%;
          border-radius: 0px;
          padding: 2%;
          background-color: #dfeffa;
          font-weight: 700;
          color: #2a2f4f;
          font-size: 14px;
      }
      
      .box2-row2-column1 {
          border-radius: 0px;
          padding: 2%;
          background-color: #dfeffa;
          font-weight: 700;
          color: #2a2f4f;
          margin-bottom: 5%;
          font-size: 14px;
      }
      
      .box3-row2-column1 {
          height:50%;
          width: 50%;
          border-radius: 15px;
          background-color: #dfeffa;
          font-weight: 700;
          font-size: 60px;
          padding-top: 7%;
          color: #2a2f4f;
          margin-bottom: 5%;
      }
      
      .box4-row2-column1 {
          height: 10%;
          width: 55%;
          border-radius: 30px;
          padding: 1%;
          font-size: 12px;
          background-color: #0d42ff;
          font-weight: bold;
          color: #dfeffa;    
      }
      
      .column1-row2 {
          text-align: -webkit-center;
          background-color: #2a2f4f;
          border-radius: 5px;
      }
      
      .column2-row2 {
          text-align: -webkit-center;
          background-color: #2a2f4f;
          border-radius: 5px;
      }
      
      .column3-row2 {
          text-align: -webkit-center;
          background-color: #2a2f4f;
          border-radius: 5px;
      }


      .nextQueue {
        margin-right: 1%;
        text-align: center;
        padding-top: 2%;
        background-color: #2a2f4f;
        color: #dfeffa;
        font-weight: 800;
        border-radius: 5px;
        font-size: 14px;
      }

      .box-queue {
        width: 100%;
        height: 100%;
        padding: 0;
        padding-top: 20%;
        border-radius: 15px;
        font-weight: 800;
        color: #2a2f4f;
        background-color: #dfeffa;
      }

      .queue {
        background-color: #2a2f4f;
        text-align: center;
        padding: 1%;
        border-radius: 15%;
      }
  }
  
  </style>
  