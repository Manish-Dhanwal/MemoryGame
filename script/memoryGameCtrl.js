// Constructor function Start
function Card(num) {
  this.url = 'images/img-' + num + '.png';
  this.open = false;
  this.matched = false;

}
// App Controller 
app.controller('myGameCtrl', function($scope, $timeout) {
  $scope.state = "first";
  $scope.firstCard;
  $scope.secondCard;
  $scope.count = 0;
  $scope.countDown = 15;
  $scope.matchedCard1 =[];
  $scope.matchedCard2 =[];
  $scope.push = function(url){
    if ($scope.matchedCard1.length <= 3 ){
      $scope.matchedCard1.push(url);
    }
    else {
      $scope.matchedCard2.push(url);
    }
  };
  $scope.cards = [
    [
      new Card('1'),
      new Card('2'),
      new Card('3'),
      new Card('4'),
    ],
    [
        new Card('5'),
        new Card('6'),
        new Card('7'),
        new Card('8'),
      ],
    [
      new Card('3'),
      new Card('4'),
      new Card('2'),
      new Card('1'),
    ],
      [
        new Card('7'),
        new Card('6'),
        new Card('5'),
        new Card('8'),
      ]
  ];
  $scope.shuffledCard =  function(){
    let cards = $scope.cards; 
    for (var i = cards.length - 1; i > 0; i--) { 
      var j = Math.floor(Math.random() * (i + 1));        
      var temp = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;
  }
  $scope.cards = cards;
  this.open = false;
  this.matched = false;
  };
  $scope.click = function(card) {
    
    if ($scope.prevent || $scope.state === "first") {
        card.open = true;
        $scope.firstCard = card;
        $scope.state = "second";
      }
    else if ($scope.state === "second") {
        card.open = true;
        $scope.secondCard = card;
        if ($scope.firstCard.url === $scope.secondCard.url) {
          $scope.state = "first";
          $scope.firstCard.matched = true;
          $scope.push($scope.firstCard.url);
          $scope.count += 1;
            if ($scope.count === 8) {
              alert("Congrats!, you won!")
            }
          }
        if ($scope.firstCard.url !== $scope.secondCard.url) {
          // Count down
          $scope.countDown -= 1;
            if ($scope.countDown === 0) {
              alert("Try Again!, you loss!")
            }
          $timeout(function(e) {
            $scope.firstCard.open = false;
            $scope.secondCard.open = false;
          }, 1000);
          $scope.state = "first";
        }
      }

};

});
