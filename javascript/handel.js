

function app() {
    //Call Full Function In File Handel JS

    handelNavMobile();
    handelUserFormPC();
    handelUserFormMobile();
    handelToastMessageSocial();
    handelTabProduct();
    handelTabProductMobile();
    handelItemTabMobile();
    scrollToTabItem();
    handelChoiceSize();
    handelQuanlityBox();
    //handelCalcPrice();
}

function handelNavMobile() {
    const openNavMobileBtn = document.querySelector('.nav__mobile__icon');
    const closeNavMobileBtn = document.querySelector('.close-nav-mobile')
    const modal = document.querySelector('.modal');
    const navMobileContent = document.querySelector('.nav__mobile__content')

    openNavMobileBtn.addEventListener('click', () => {
        modal.classList.add('active');
        navMobileContent.classList.add('active');
    })
    closeNavMobileBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        navMobileContent.classList.remove('active');
    })
}

function resetForm(num) {
    document.querySelector(`.email__login__message-fail-${num}`).classList.remove('active');
    document.querySelector(`.email__login__message-empty-${num}`).classList.remove('active');
    document.querySelector(`.password__login__message-fail-${num}`).classList.remove('active');
    document.querySelector(`.password__login__message-empty-${num}`).classList.remove('active');
    document.querySelectorAll('input').forEach(e => e.style.borderColor = "#BBBDBF")
}

function handelUserFormPC() {
    const btnLogin = document.querySelector('.user__login');
    const btnCloseLogin = document.querySelector('.login__form__btn-close');
    const btnSignUp = document.querySelector('.user__sign-up');
    const btnCloseSignUp = document.querySelector('.sign-up__form__btn-close');
    const btnHaveAccount = document.querySelector('.sign-up__go-login__link');
    const userModal = document.querySelector('.user__modal');
    const contentLoginForm = document.querySelector('.user__login__form');
    const contentSignUpForm = document.querySelector('.user__sing-up__form');

    btnLogin.addEventListener('click', () => {
        userModal.classList.add('active');
        contentLoginForm.classList.add('active');
    })
    btnCloseLogin.addEventListener('click', () => {
        userModal.classList.remove('active');
        contentLoginForm.classList.remove('active');
        contentLoginForm.reset();
        resetForm(1);
    })
    btnSignUp.addEventListener('click', () => {
        userModal.classList.add('active');
        contentSignUpForm.classList.add('active');
    })
    btnCloseSignUp.addEventListener('click', () => {
        userModal.classList.remove('active');
        contentSignUpForm.classList.remove('active');
        contentSignUpForm.reset();
        resetForm(2);
    })
    btnHaveAccount.addEventListener('click', () => {
        contentSignUpForm.classList.remove('active');
        contentLoginForm.classList.add('active');
        contentLoginForm.reset();
    })
}

function handelUserFormMobile() {
    const loginBtnMobile = document.querySelector('.nav__mobile__icon__user');
    const loginBtnMobileClose = document.querySelector('.user__modal__mobile__image__icon-close');
    const modalUserFormMobile = document.querySelector('.user__modal__mobile');
    const contentLoginMobile = document.querySelector('.user__mobile__login__form');
    const contentSignupMobile = document.querySelector('.user__mobile__sign-up__form');
    const linktoSignupMobile = document.querySelector('.user__mobile__login__form__no-account__link');
    const linktoLoginMobile = document.querySelector('.user__mobile__sign-up__form__no-account__link')

    loginBtnMobile.addEventListener('click', () => {
        modalUserFormMobile.classList.add('active');
        contentLoginMobile.classList.add('active');
    })
    loginBtnMobileClose.addEventListener('click', () => {
        modalUserFormMobile.classList.remove('active');
        contentLoginMobile.classList.remove('active');
        contentSignupMobile.classList.remove('active');
        contentLoginMobile.reset();
        resetForm(3);
    })
    linktoSignupMobile.addEventListener('click', () => {
        contentLoginMobile.classList.remove('active')
        contentSignupMobile.classList.add('active');
        contentLoginMobile.reset();
        resetForm(4);
    })
    linktoLoginMobile.addEventListener('click', () => {
        contentSignupMobile.classList.remove('active');
        contentLoginMobile.classList.add('active');
        contentSignupMobile.reset();
        resetForm(3);
    })
}

function handelToastMessageSocial(){
    const userSocialMobile = document.querySelector('.user__mobile__login__form__social');
    const userSocialSigupMobile = document.querySelector('.user__mobile__sign-up__form__social');
    const userLoginSocialPC = document.querySelector('.login__form__social');
    const userSignupSocialPC = document.querySelector('.sign-up__form__social');
    const contentToastMessage = document.querySelector('.toast-message');
    const closeToastMessage = document.querySelector('.toast-message__content__close__btn');
    
    userSocialMobile.addEventListener('click', () => {
        contentToastMessage.classList.add('active');
        setTimeout(() => {
            contentToastMessage.classList.remove('active');
        }, 3000)
    })
    userLoginSocialPC.addEventListener('click', () => {
        contentToastMessage.classList.add('active');
        setTimeout(() => {
            contentToastMessage.classList.remove('active');
        }, 3000)
    })
    userSignupSocialPC.addEventListener('click', () => {
        contentToastMessage.classList.add('active');
        setTimeout(() => {
            contentToastMessage.classList.remove('active');
        }, 3000)
    })
    userSocialSigupMobile.addEventListener('click', () => {
        contentToastMessage.classList.add('active');
        setTimeout(() => {
            contentToastMessage.classList.remove('active');
        }, 3000)
    })
    closeToastMessage.addEventListener('click', () => {
        contentToastMessage.classList.remove('active');
    })
}

function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }
    return (false)
}

function validateFormEmail(id, num) {
    const messageEmailFail = document.querySelector(`.email__login__message-fail-${num}`);
    const messageEmailEmpty = document.querySelector(`.email__login__message-empty-${num}`);
    const valueEmail = document.querySelector(`#${id}`).value.trim();
    const checkMail = ValidateEmail(valueEmail);

    if (valueEmail.length === 0 || checkMail === false) {
        if (valueEmail.length === 0) {
            document.querySelector(`#${id}`).style.borderColor = "red";
            messageEmailFail.classList.remove('active');
            messageEmailEmpty.classList.add('active');
        }
        else {
            document.querySelector(`#${id}`).style.borderColor = "red";
            messageEmailEmpty.classList.remove('active');
            messageEmailFail.classList.add('active');
        }
    }
    else {
        messageEmailEmpty.classList.remove('active');
        messageEmailFail.classList.remove('active');

        document.querySelector(`#${id}`).style.borderColor = "#BBBDBF";
    }
}

function validateFormPassword(id, num) {
    const messagePasswordFail = document.querySelector(`.password__login__message-fail-${num}`);
    const messagePasswordEmpty = document.querySelector(`.password__login__message-empty-${num}`);
    const valuePassword = document.querySelector(`#${id}`).value.trim();

    if (valuePassword.length < 8) {
        if (valuePassword.length === 0) {
            document.querySelector(`#${id}`).style.borderColor = "red";
            messagePasswordFail.classList.remove('active');
            messagePasswordEmpty.classList.add("active");
        }
        else {
            document.querySelector(`#${id}`).style.borderColor = "red";
            messagePasswordEmpty.classList.remove('active');
            messagePasswordFail.classList.add('active');
        }
    }
    else {
        document.querySelector(`#${id}`).style.borderColor = "#BBBDBF";
        messagePasswordEmpty.classList.remove('active');
        messagePasswordFail.classList.remove('active');
    }
}

function handelSubmit(email, password, num) {
    validateFormEmail(email, num);
    validateFormPassword(password, num);
}

const panes = document.querySelectorAll('.product-list-pane');

function handelTabProduct() {
    const tabs = document.querySelectorAll('.product-list-tab-items');

    tabs.forEach(tab => {
        tab.addEventListener('click', e => {
            const tabElement = e.currentTarget;
            const dataTab = tabElement.dataset.nametab;

            panes.forEach(pane => {
                pane.classList.remove('active');
            })
            tabs.forEach(tab => {
                tab.classList.remove('active');
            })

            tabElement.classList.add('active');
            document.querySelector(`#${dataTab}`).classList.add('active');
        })
    })
}

function handelTabProductMobile(){
    const tabs = document.querySelectorAll('.product-list-tab-items-mobile');

    tabs.forEach(tab => {
        tab.addEventListener('click', e => {
            const tabElement = e.currentTarget;
            const dataTab = tabElement.dataset.nametab;

            panes.forEach(pane => {
                pane.classList.remove('active');
            })
            tabs.forEach(tab => {
                tab.classList.remove('active');
            })

            tabElement.classList.add('active');
            document.querySelector(`#${dataTab}`).classList.add('active');
        })
    })
}

function handelItemTabMobile (){
    const tabMobile = document.querySelector('.product-list-tabs-mobile');
   
    document.addEventListener('scroll', ()=> {
        const panesMobile = document.querySelector('.product-list');
        const tabProuductContentHeightTop = panesMobile.offsetTop;
        const tabProuductContentHeight = panesMobile.offsetHeight;
        const valueScroll = window.scrollY;

        if (valueScroll >= tabProuductContentHeightTop && valueScroll <= (tabProuductContentHeight + tabProuductContentHeightTop - 500)){
            tabMobile.classList.add('active');
        }
        else{
            tabMobile.classList.remove('active');
        }
    })
}

function scrollToTabItem() {
    const tabsProduct = document.querySelectorAll('.product-list-tab-items-mobile');

    tabsProduct.forEach(tab => {
        tab.addEventListener('click', () => {
            const topContentProduct = document.querySelector('.product-list');
            topContentProduct.scrollIntoView({hehavior: 'smooth'})
        })
    })

}

function deleteActive(e, tabs){
    e.forEach(el => {el.classList.remove('active')})
    tabs.forEach(tab => {tab.classList.remove('active')})
}

function activeProduct(nameProduct, type) {
    if (type === 'pc'){
        const productContent = document.getElementById(nameProduct);
        const tabProduct = document.getElementById(`tab-${nameProduct}`);

        productContent.classList.add('active');
        tabProduct.classList.add('active');
    }
    else if (type === 'mobile'){
        const productContentMobile = document.getElementById(nameProduct);
        const tabProductMobile = document.getElementById(`tab-mobile-${nameProduct}`)
    
        productContentMobile.classList.add('active');
        tabProductMobile.classList.add('active');
    }
}

function handelNavBarPC(value) {
    const tabsPC = document.querySelectorAll('.product-list-tab-items');
    const panesPC = document.querySelectorAll('.product-list-pane')
    const productContent = document.querySelector('.product-list');

    productContent.scrollIntoView({behavior: 'smooth'});
    deleteActive(panesPC, tabsPC);
    activeProduct(value, 'pc');
}

function handelNavBarMobile(value){
    const modal = document.querySelector('.modal');
    const navMobileContent = document.querySelector('.nav__mobile__content');
    const productContent = document.querySelector('.product-list');
    const tabs = document.querySelectorAll('.product-list-tab-items-mobile');
    const panes = document.querySelectorAll('.product-list-pane');

    productContent.scrollIntoView({behavior: 'smooth'});
    modal.classList.remove('active');
    navMobileContent.classList.remove('active');
    deleteActive(tabs, panes);
    activeProduct(value, 'mobile');
}

/*
function CalcPrice(price){
    const minusIcon = document.querySelector('.detail-page__quanlity__box__minus');
    const plusIcon = document.querySelector('.detail-page__quanlity__box__plus');
    const valueQuanlity = parseInt(document.querySelector('.detail-page__quanlity__box__value').value);
   
    plusIcon.addEventListener('click',()=>{
        //const totalPrice = price*valueQuanlity;
        
    })
    

}

function checkValue (value){

}

//Don't Success
function handelCalcPrice(type){
    switch(type){
        case 'size-x':
            CalcPrice(10);
            break;
        case 'size-m':
            CalcPrice(8);
            break;
        case 'size-l':
            CalcPrice(10);
            break;
        default: 
            CalcPrice(5);
    }


}
*/

function handelChoiceSize(){
    const sizeContents = document.querySelectorAll('.detail-page__size__choice');
    const sizeIcons = document.querySelectorAll('.detail-page__size__choice__icon');
    const priceBox = document.querySelector('.detail-page__size__price__value')

    sizeContents.forEach((size)=>{
        size.addEventListener('click', (e) => {
            sizeIcons.forEach((icon) => icon.classList.remove('active'));
            sizeContents.forEach((size) => size.classList.remove('active'));
            
            const valueChoice  = e.currentTarget.dataset.valuechoice;
            document.querySelector(`#${valueChoice}`).classList.add('active');
            e.currentTarget.classList.add('active');
            const check = e.currentTarget.dataset.valuechoice;

            const sizeContentActive = document.querySelector('.detail-page__size__choice.active');
            const priceChoice = parseInt(sizeContentActive.dataset.pricechoice);
            priceBox.innerHTML = priceChoice;

            //handelCalcPrice(check);
        })
    })
}

function handelQuanlityBox(){
    let minusIcon = document.querySelector('.detail-page__quanlity__box__minus');
    let plusIcon = document.querySelector('.detail-page__quanlity__box__plus');
    let contentValue = document.querySelector('.detail-page__quanlity__box__value');
    let valueQuanlity  = parseInt(document.querySelector('.detail-page__quanlity__box__value').value);

    plusIcon.addEventListener('click', () => {
        valueQuanlity++;
        contentValue.value = valueQuanlity;
        //checkValue(valueQuanlity);
    })
    minusIcon.addEventListener('click', () => {
        if (valueQuanlity > 1){
            valueQuanlity--;
            contentValue.value = valueQuanlity;
            //checkValue(valueQuanlity);

        } 
    })
}




function addToCart(){
    const valueQuanlity = parseInt(document.querySelector('.detail-page__quanlity__box__value').value);
    const sizeProduct = document.querySelector('.detail-page__size__choice.active').dataset.valuechoice;

    //Info And Quanlity Product To POST API
    const resultSent ={
        valueProduct: valueQuanlity,
        sizeProduct: sizeProduct
    }

    //...Content Code up to API
}

function handelDetailPage(){
    const modalDetail = document.querySelector('.detail__modal');
    const top = document.querySelector('.header');
    const backHome = document.querySelector('.detail-page__nav__item.home');
    const backPizza = document.querySelector('.detail-page__nav__item.pizza');
    
    modalDetail.classList.add('active');

    backHome.addEventListener('click',()=>{
        modalDetail.classList.remove('active');
        top.scrollIntoView({behavior: 'smooth'});
    })
    
    backPizza.addEventListener('click', () => {
        modalDetail.classList.remove('active');
    })
}

//Run Web App
app();