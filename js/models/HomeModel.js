// Includes file dependencies
define([ "jquery", "underscore", "stackmob" ], function( $, _, StackMob ) {

    // The ChallengeModel constructor

    // TODO: move this to a proper place
    if (window.location.href.indexOf('stackmobapp.com') !== -1) {
        StackMob.init({ // production
            appName: "fitnesschallenge",
            clientSubdomain: "twistedogregmailcom",
            publicKey: "eb6421b3-9737-4f0b-97ce-8aebc448739b",
            apiVersion: 2
        });
    }
    else {
        StackMob.init({ // dev
            appName: "fitnesschallenge",
            clientSubdomain: "twistedogregmailcom",
            publicKey: "ba025b72-92db-4681-9abb-231baca5a94d",
            apiVersion: 0
        });
    }


    var HomeModel = StackMob.Model.extend(
        { schemaName: 'challenge'}
    );

    // Returns the ChallengeModel class
    return HomeModel;

} );