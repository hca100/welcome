

    var s = skrollr.init();

    //스크롤값 표시
    $(window).scroll(function(){
    let scrollTop = $(window).scrollTop();
    $(".Scroll span").text(parseInt(scrollTop)); 
    });



    //모달창_날짜
    let toDay = new Date();
    let year = toDay.getFullYear(); // 년도
    let month = toDay.getMonth() + 1;  // 월
    let toDate = toDay.getDate();  // 날짜

    $('#navToday').html( year + '/' + month + '/' + toDate );
    $('#modalToday').html( '오늘은 &nbsp;' +  year + '년 &nbsp' + month + '월 &nbsp' + toDate + '일&nbsp 입니다' );


    //모달창 불러오기
    $('.modal_come, #navModal').click(function(){
        $('#modal').css('display','block');
    })

    //모달창 없애기
    $('.modal_icon').click(function(){
        $('#modal').css('display','none');
    })

    $('#modalToday')


//오디오 설정
const audioContainer = document.querySelector('#audioContainer');
const playBtn = document.querySelector('.js-playBtn');
const stopBtn = document.querySelector('.js-stopBtn')

    //오디오 재생 
    function playAudio() {
    audioContainer.volume = 0.5;
    audioContainer.loop = true;
    audioContainer.play();
    }

    //오디오 정지
    function stopAudio() {
    audioContainer.pause();  
    }

    // 버튼 클릭시 재생
    function loadAudio() {
    const source = document.querySelector('#audioSource');
    source.src = `./public/audio/포폴음악.mp3`;
    audioContainer.load();
    playAudio();
    }

playAudio();
playBtn.addEventListener('click', loadAudio);
stopBtn.addEventListener('click', stopAudio);











