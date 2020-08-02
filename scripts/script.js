$(() => {
  const openModal = (type) => $(`#${type}`).modal('show');
  const hideModal = (type) => $(`#${type}`).modal('hide');

  const addUrlChangedListener = () => {
    $(window).bind('popstate', () => {
      if (window.location.href.indexOf('#login') !== -1) {
        openModal("login");
      } else {
        hideModal("login")
      };

      if (window.location.href.indexOf('#register') !== -1) {
        openModal("register");
      } else {
        hideModal("register")
      };
    })
  };

  const addLoginButtonClickListener = () => {
    $('#loginButton').click(() => {
      openModal("login");
    })
  };

  const addRegisterButtonClickListener = () => {
    $('#registerButton').click(() => {
      openModal("register");
    })
  };

  const checkLoginUrlOnInit = () => {
    if (window.location.href.indexOf('#login') !== -1) {
      openModal("login");
    }
    if (window.location.href.indexOf('#register') !== -1) {
      openModal("register");
    }
  }

  const addLoginModalClosedListener = () => {
    $('#login').on('hidden.bs.modal', () => window.location = "/LandingPage_H/")
  }
  const addRegisterModalClosedListener = () => {
    $('#register').on('hidden.bs.modal', () => window.location = "/LandingPage_H/")
  }

  const addScrollListener = () => {
    $(document).scroll(() => {
      if($(this).scrollTop() > 10) {
        $('.header_navigation').css('background', 'rgba(0,0,0, 0.3)')
      } else {
        $('.header_navigation').css('background', 'unset')
      }
      if($(this).scrollTop() > 10) {
        $('.header_menuIcon').css('background', 'rgba(0,0,0, 0.3)')
      } else {
        $('.header_menuIcon').css('background', 'unset')
      }

    })
  }


  checkLoginUrlOnInit()
  addUrlChangedListener();
  addLoginButtonClickListener();
  addRegisterButtonClickListener();
  addLoginModalClosedListener();
  addRegisterModalClosedListener();
  addScrollListener();

});

