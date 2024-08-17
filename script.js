let follow = document.querySelector('#add');
let friend = document.querySelector('h3');
let check = 0
follow.addEventListener('click', function(){
    if(check == 0){
        friend.innerText = 'Following';
        follow.innerText = 'Unfollow';
        check = 1
    }else{
        follow.innerText = 'Follow';
        friend.innerText = '';
        check = 0;
    }
})