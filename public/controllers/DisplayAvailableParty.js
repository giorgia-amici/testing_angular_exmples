partyApp.controller('DisplayAvailableParty',
	function DisplayAvailableParty($scope){
			$scope.party = {
					name: 'First Party',
					organizer: 'Giorgia',
					location: 'London',
					date: '1/1/2013'
			};

		// $scope.upVoteSession = function(session) {
  //   	session.upVoteCount++;
  //   };

  //   $scope.downVoteSession = function(session) {
  //   	session.upVoteCount--;
  //   };
		}

);