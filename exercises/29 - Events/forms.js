console.log('it works');

const wes = document.querySelector('.wes');

wes.addEventListener('click', function(event) {
    //console.log(event);
    const shouldChangePage = confirm(
        'This website might be malicious! Do you wish to proceed?'
    );
    if (!shouldChangePage){
        event.preventDefault();
    }
    });


    const signupForm = document.querySelector('[name="signup"]');

    signupForm.addEventListener('submit', function(event) {
        // console.log(event);
        // event.preventDefault();
        const name = event.currentTarget.name.value;
        if (name.includes('chad')) {
            alert('Sorry bro');
            event.preventDefault();
        }
    });


    //console.log(signupForm.name)
    function logEvent(event) {
        console.log(event.type);
        console.log(event.currentTarget.value);
    }
    signupForm.name.addEventListener('keyup', logEvent);
    
    // 'keyup'
    // 'keydown'
    // 'focus'
    // 'blur'