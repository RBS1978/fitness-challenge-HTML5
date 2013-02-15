"use strict";
define([ "jquery", "backbone", "../fitness", "../customCodeClient", "../views/FooterView"], function( $, Backbone, fitness, customCode, FooterView) {

    var LoginView = Backbone.View.extend({

        initialize: function() {
            this.render();
        },

        events: {"click #login_submit" : "loginSubmit"} ,

        render: function() {

            //var footerView = new FooterView( { el: "#login .footer" } );

            var header = $('#header_template');
            var template = $('#login_template');
            this.$el.empty();
            this.$el.append(header.html()).append(template.html());
            this.$el.trigger('create');
            return this;
        },

        loginSubmit : function() {
            var email = $("#email").val();
            var password = $('#password').val();
            $.mobile.loading("show");
            customCode.lookupFitnessUser(email, password, function(success, data) {
                if (success) { // logged in
                    $.mobile.loading("hide");
                    fitness.user = data;
                    var username = fitness.user.get('username');
                    if (username) {
                        fitness.log("logged in as " + username + " (" + fitness.user.get('email') + ")");
                        localStorage.setItem('username', username);
                    }
                    $.mobile.loading("show");
                    router.navigate('#home', true);
                }
                else {
                    $.mobile.loading("hide");
                    fitness.showMessage('login failed\n ' + data);
                }
            });
        }
    });
    return LoginView;
});
