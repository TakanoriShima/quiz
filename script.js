/* global $*/

let count = 0;
let correct_count = 0;
// let seq = 0;
let seq = 1;
let question;

const answer_button = $('#answer_button');
const next_button = $('#next_button');

const questions = {
    q1: {
        question: '世界で一番人口の多い国は？',
        ans: {
            1: '日本',
            2: '中国',
            3: 'アメリカ',
            4: 'インド',
        },
        answer: '中国',
    },
    q2: {
        question: 'インドの首都は？',
        ans: {
            1: 'ニューデリー',
            2: 'ジャカルタ',
            3: 'ブエノスアイレス',
            4: 'デリー',
        },
        answer: 'ニューデリー',
    },
    q3: {
        question: '日本で一番面積の広い都道府県は？',
        ans: {
            1: '岩手県',
            2: '島根県',
            3: '北海道',
            4: '沖縄県',
        },
        answer: '北海道',
    },
};

// 全問題数
const total_count = Object.keys(questions).length;
console.log(total_count);

function show_question(){
    $('#elm').empty();
    count++;
    $('#count').text(count);
    $('#total_count').text(total_count);
    // let seq = 1;
    question = questions[`q${seq}`];
    console.log(question);
    
    $('#q').text(question['question']);
    
    $.each(question['ans'], function(index, value) {
        console.log(index + ': ' + value);
        const element = $('<input>').attr({type: "radio", name: "answer", value: value, id: index});
        const label = $('<label>').attr({for: index}).text(value);
        $('#elm').append(element);
        $('#elm').append(label);
        $('#elm').append($('<br>'));
    });
    
    $('input[name="answer"]:eq(0)').attr({checked: true});
    
    $('#next_button').hide();
    $('#stat').hide();
    $('#answer_button').prop("disabled", false);

    seq++;

}
    

show_question();

answer_button.click(function(){
    // alert('OK');
    console.log('OK');
    let answer = $('input[name="answer"]:checked').val();
    console.log(answer);
    const ans = question['answer'];
    console.log(ans);
    
    if(answer === ans){
        $('#result').text('正解').addClass('correct');
        correct_count++;
    }else{
        $('#result').text('不正解').addClass('error');
    }

    $('#stat').text(`正解数/問題数 = ${correct_count}/${count} = ${(correct_count / count * 100).toFixed(1)}(%)`);
    
    $('#next').text(`第${count + 1}問へ`);
    
    $('#stat').show();
    $('#result').show();
    if(count >= total_count){
        $('#stat').after($('<p>').text('すべての問題はこれで終了です！').addClass('alert'));
    }else{
        $('#next_button').show();
    }
    
    $('#answer_button').prop("disabled", true);
});

next_button.click(function(){
    // alert('OK');
    console.log(count);
    $('#stat').hide();
    $('#result').hide();
    show_question();
});