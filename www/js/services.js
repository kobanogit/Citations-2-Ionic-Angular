var appCitationsServices = angular.module('appCitationsServices', []);

appCitationsServices.factory('CitationsFactory', function() {

  var CitationsFactoryContent = {
    /*getCitations : function(){
      return factory.citations;
    },
    getCitationFromId : function(id){
      var citation = factory.citations[id].text;
      return citation;
    },*/
    getRandCitation : function(){
      var CitationsFactory = Object.keys(CitationsFactoryContent.citationsAll).length;
      var randNumber = Math.floor(Math.random() * CitationsFactory);
      var randCitation = {
        id:CitationsFactoryContent.citationsAll[randNumber].id,
        text:CitationsFactoryContent.citationsAll[randNumber].text,
        author:CitationsFactoryContent.citationsAll[randNumber].author,
        fav:CitationsFactoryContent.citationsAll[randNumber].fav
      };
      return randCitation;
    },
    getPrevCitation : function(id){
      citationQty = CitationsFactoryContent.citationsAll.length;
      console.log('id : ' + typeof(id) + ' - ' + id  + ' citationQty : ' + citationQty);
      // var prevId = 1;
      var prevId = id == 0 ? prevId = citationQty - 1 : prevId = id - 1;
      var prevCitation = {
        id:CitationsFactoryContent.citationsAll[prevId].id,
        text:CitationsFactoryContent.citationsAll[prevId].text,
        author:CitationsFactoryContent.citationsAll[prevId].author,
        fav:CitationsFactoryContent.citationsAll[prevId].fav
      };
      return prevCitation;
    },
    getNextCitation : function(id){
      citationQty = CitationsFactoryContent.citationsAll.length;
      console.log('id : ' + typeof(id) + ' - ' + id  + ' citationQty : ' + citationQty);
      // var nextId = 1;
      var nextId = id == citationQty-1 ? nextId = 0 : nextId = id + 1;
      var nextCitation = {
        id:CitationsFactoryContent.citationsAll[nextId].id,
        text:CitationsFactoryContent.citationsAll[nextId].text,
        author:CitationsFactoryContent.citationsAll[nextId].author,
        fav:CitationsFactoryContent.citationsAll[nextId].fav
      };
      return nextCitation;
    },
    citationsAll : [
      {
        id: 0,
        author: "Dalai-Lama",
        text: "Sème un acte, tu récolteras une habitude. Sème une habitude, tu récolteras un caractère. Sème un caractère, tu récolteras une destinée.",
        fav:0
      },{
        id: 1,
        author: "Dalai-Lama",
        text: "Il n’importe pas qu’un être soit croyant ou non : il est plus important qu’il soit bon.",
        fav:1
      },{
        id: 2,
        author: "Dalai-Lama",
        text: "Jugez vos succès d’après ce que vous avez dû sacrifier pour les obtenir",
        fav:0
      },{
        id: 3,
        author: "Dalai-Lama",
        text: "Le malheur s’empare de chacun de nous parce que nous nous prenons pour le centre du monde, car nous avons la misérable conviction d’être seuls à souffrir l’insoutenable.",
        fav:1
      },{
        id: 4,
        author: "Dalai-Lama",
        text: "Le malheur provient toujours de ce que l’on se sent prisonnier à l’intérieur de sa propre peau, de sa propre cervelle.",
        fav:0
      },{
        id: 5,
        author: "Dalai-Lama",
        text: "L'apaisement réside en chacun de nous.",
        fav:1
      },{
        id: 6,
        author: "Dalai-Lama",
        text: "C'est dans son coeur quil faut construire la paix.",
        fav:0
      },{
        id: 7,
        author: "Dalai-Lama",
        text: "Le désarmement extérieur passe par le désarmement intérieur. Le seul vrai garant de la paix est en soi.",
        fav:1
      },{
        id: 8,
        author: "Dalai-Lama",
        text: "Lorsque nos intentions sont égoïstes, le fait que nos actes puissent paraître bons ne garantit pas qu'ils soient positifs ou éthiques.",
        fav:0
      },{
        id: 9,
        author: "Dalai-Lama",
        text: "Si nous devenions violents, nous n’aurions plus rien à défendre.",
        fav:1
      },{
        id: 10,
        author: "Dalai-Lama",
        text: "Combattre l'ignorance, c'est aussi combattre la souffrance. L'ignorance est la source des poisons et obscurcissements mentaux. En développant l'altruisme, l'amour, la tendresse et la compassion, on réduit la haine, le désir ou l'orgueil.",
        fav:0
      },{
        id: 11,
        author: "Dalai-Lama",
        text: "Prendre soin des autres, partager leurs problèmes, faire preuve de compassion, tel est le fondement d'une vie heureuse pour soi-même, pour sa famille et pour l'humanité toute entière.",
        fav:0
      },{
        id: 12,
        author: "Dalai-Lama",
        text: "Être responsable de maux et de la destruction d'autrui, c'est être davantage une force du mal qu'un être humain. Faites donc de votre vie quelque chose de constructif, et non de destructeur.",
        fav:0
      },{
        id: 13,
        author: "Dalai-Lama",
        text: "J'appelle l'amour et la compassion une religion universelle. Telle est ma religion.",
        fav:0
      },{
        id: 14,
        author: "Dalai-Lama",
        text: "Si vous avez l'impression d'être trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique et vous verrez lequel des deux empêche l'autre de dormir.",
        fav:0
      },{
        id: 15,
        author: "Dalai-Lama",
        text: "La faculté de se mettre dans la peau des autres et de réfléchir à la manière dont on agirait à leur place est très utile si on veut apprendre à aimer quelqu'un.",
        fav:0
      },{
        id: 16,
        author: "Dalai-Lama",
        text: "La sensation d'être heureux ou malheureux dépend rarement de notre état dans l'absolu, mais de notre perception de la situation, de notre capacité à nous satisfaire de ce que nous avons.",
        fav:0
      },{
        id: 17,
        author: "Dalai-Lama",
        text: "Nul besoin de temples, nul besoin de philosophies compliquées. Notre cerveau et notre cœur sont nos temples.",
        fav:0
      },{
        id: 18,
        author: "Dalai-Lama",
        text: "Le vrai bonheur ne dépend d'aucun être, d'aucun objet extérieur. Il ne dépend que de nous...",
        fav:0
      },{
        id: 19,
        author: "Dalai-Lama",
        text: "Il n'y a personne qui soit né sous une mauvaise étoile, il n'y a que des gens qui ne savent pas lire le ciel.",
        fav:0
      },{
        id: 20,
        author: "Dalai-Lama",
        text: "La colère émane d'un esprit grossier qui doit être adouci par l'amour.",
        fav:0
      },{
        id: 21,
        author: "Dalai-Lama",
        text: "Si l'on est blessé par une flèche empoisonnée, l'important est d'abord de la retirer, ce n'est pas le moment de s'interroger d'où elle vient, qui l'a tirée, de quel poison s'agit-il.",
        fav:0
      },{
        id: 22,
        author: "Dalai-Lama",
        text: "La patience est le seul remède à la frustration. L'avidité - je veux ceci ou cela - n'entraîne que le malheur, la destruction de l'environnement et l'exploitation de l'autre; elle creuse le fossé entre riches et pauvres.",
        fav:0
      },{
        id: 23,
        author: "Dalai-Lama",
        text: "Malgré leurs différences philosophiques et rituelles, toutes les religions se ressemblent: elles délivrent un message de compassion, d'amour et de pardon.",
        fav:0
      },{
        id: 24,
        author: "Dalai-Lama",
        text: "C'est en parvenant à nos fins par l'effort, en étant prêt à faire le sacrifice de profits immédiats en faveur du bien-être d'autrui à long terme, que nous parviendrons au bonheur caractérisé par la paix et le contentement authentique.",
        fav:0
      },{
        id: 25,
        author: "Dalai-Lama",
        text: "Malgré notre besoin vital de confiance en nous, il est important de savoir distinguer l'arrogance de la fierté légitime...",
        fav:0
      },{
        id: 26,
        author: "Dalai-Lama",
        text: "On ne peut être aimant et compatissant sans contenir ses désirs et ses intérêts immédiats.",
        fav:0
      },{
        id: 27,
        author: "Dalai-Lama",
        text: "L'éducation à elle seule ne suffit pas, la qualité fondamentale qui rend les gens sensibles aux autres, c'est la compassion.",
        fav:0
      },{
        id: 28,
        author: "Dalai-Lama",
        text: "La bataille contre l'ignorance se gagne tous les jours, et elle finit par ouvrir sur des perspectives insoupçonnées.",
        fav:0
      },{
        id: 29,
        author: "Dalai-Lama",
        text: "Un ennemi acquis sans effort, c'est un trésor surgi dans la maison ; il doit m'être cher, cet auxiliaire de ma carrière spirituelle.",
        fav:0
      },{
        id: 30,
        author: "Dalai-Lama",
        text: "On s'intéresse à ses membres comme parties de son corps, pourquoi pas aux hommes comme parties de l'humanité ?",
        fav:0
      },{
        id: 31,
        author: "Dalai-Lama",
        text: "Compte tenu que le bouddhisme met l'accent sur l'autocréation, puisqu'il ne conçoit pas de dieu créateur, certaines personnes avancent qu'il ne peut, à proprement parler, être considéré comme une religion.",
        fav:0
      },{
        id: 32,
        author: "Dalai-Lama",
        text: "La compassion n'est utile que si elle est mise en pratique. Elle doit devenir la clé de notre relation aux autres, le fondement de nos pensées et de nos actions.",
        fav:0
      },{
        id: 33,
        author: "Dalai-Lama",
        text: "Nous appartenons tous à la grande famille humaine.",
        fav:0
      },{
        id: 34,
        author: "Dalai-Lama",
        text: "La prospérité - mentale et affective plutôt que purement matérielle - a elle aussi son importance dans l'acquisition de la paix intérieure.",
        fav:0
      },{
        id: 35,
        author: "Dalai-Lama",
        text: "Aucun journaliste ne sait plus ce qu'est une bonne nouvelle.",
        fav:0
      },{
        id: 36,
        author: "Dalai-Lama",
        text: "Plus nous aurons donné de sens à notre vie, moins nous éprouverons de regrets à l'instant de la mort.",
        fav:0
      },{
        id: 37,
        author: "Dalai-Lama",
        text: "Le bonheur se distingue du plaisir : ce dernier n'est pas lié au sentiment de l'existence, on ne s'y oublie pas en tant qu'être singulier. Ici se loge la deuxième raison qui peut expliquer la rareté de ce bonheur en littérature.",
        fav:0
      },{
        id: 38,
        author: "Dalai-Lama",
        text: "On peut conquérir des milliers d'hommes dans une bataille ; mais celui qui se conquiert lui-même, lui seul est le plus noble des conquérants.",
        fav:0
      }
    ]
  };
  return CitationsFactoryContent;
});
