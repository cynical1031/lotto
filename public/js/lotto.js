var avoidNumber = []

function lottoGenerate() {
    var lotto = new Array(6); // 6개의 배열이 lotto에 저장
    var count = 0; //추출한 로또번호의 갯수
    var overl = true; // 번호중복 여부 변수

    while (count < 6) { // 로또번호 6번 얻을 때까지 반복.
        var number = 0; //랜덤번호 가져오는 변수
        number = parseInt(Math.random() * 45) + 1; // 1~45사이에 랜덤번호 추출

        for (var i = 0; i < count; i++) { // 1부터 i까지 반복하여 중복확인
            if (lotto[i] == number) { // 중복된 번호가 아니면 넘어가기.
                overl = false;
            }
        }

        for (var i = 0; i < avoidNumber.length; i++) { //제외 숫자
            if (avoidNumber[i] == number) {
                overl = false;
            }
        }

        if (overl) { //중복 없을 시 count 1 증가
            lotto[count] = number; //추출된 번호를 배열에 넣기
            count++;
        }

        overl = true; //원래 true으로 돌아가기
    }
    lotto.sort(compNumber);
    var statement = '<div class="ui circular labels">'
    for (var i = 0; i < lotto.length; i++) {
        switch (true) {
            case (lotto[i] < 11):
                statement += '<div class="ui yellow circular label">' + lotto[i] + '</div>'
                break;
            case (lotto[i] >= 11 && lotto[i] < 21):
                statement += '<div class="ui blue circular label">' + lotto[i] + '</div>'
                break;
            case (lotto[i] >= 21 && lotto[i] < 31):
                statement += '<div class="ui red circular label">' + lotto[i] + '</div>'
                break;
            case (lotto[i] >= 31 && lotto[i] < 41):
                statement += '<div class="ui grey circular label"">' + lotto[i] + '</div>'
                break;
            case (lotto[i] >= 41 && lotto[i] <= 46):
                statement += '<div class="ui green circular label">' + lotto[i] + '</div>'
                break;
        }
    }
    statement += '<div>'
    $('.lottoWrap').append(statement)
}

function compNumber(a, b) {
    return a - b;
}