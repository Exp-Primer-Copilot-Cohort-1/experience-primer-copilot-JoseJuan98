function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'app/members/skills.html',
        crontoller: "SkillsMemberController",
        controllerAs: "vm",
        bindToController: true,
        scope: {
            member: '='
        }
    };
}