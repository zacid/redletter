const quotes = [
    {
        text: "Blessed are the poor in spirit, for theirs is the kingdom of heaven.",
        authentic: true,
        source: "Matthew 5:3"
    },
    {
        text: "Love your enemies and pray for those who persecute you.",
        authentic: true,
        source: "Matthew 5:44"
    },
    {
        text: "Split a piece of wood, and I am there. Lift up the stone, and you will find me there.",
        authentic: false,
        source: "Gospel of Thomas, saying 77"
    },
    {
        text: "Do not let your left hand know what your right hand is doing.",
        authentic: true,
        source: "Matthew 6:3"
    },
    {
        text: "I am the light that is over all things. I am all: from me all came forth, and to me all attained.",
        authentic: false,
        source: "Gospel of Thomas, saying 77"
    },
    {
        text: "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.",
        authentic: true,
        source: "Matthew 7:7"
    },
    {
        text: "The kingdom of God is inside you and all around you, not in buildings of wood and stone.",
        authentic: false,
        source: "Gospel of Thomas, saying 3"
    },
    {
        text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
        authentic: true,
        source: "John 3:16"
    },
    {
        text: "If you bring forth what is within you, what you bring forth will save you. If you do not bring forth what is within you, what you do not bring forth will destroy you.",
        authentic: false,
        source: "Gospel of Thomas, saying 70"
    },
    {
        text: "I am the way, the truth, and the life. No one comes to the Father except through me.",
        authentic: true,
        source: "John 14:6"
    },
    {
        text: "Peace I leave with you; my peace I give you. I do not give to you as the world gives.",
        authentic: true,
        source: "John 14:27"
    },
    {
        text: "I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit.",
        authentic: true,
        source: "John 15:5"
    },
    {
        text: "Let the little children come to me, and do not hinder them, for the kingdom of heaven belongs to such as these.",
        authentic: true,
        source: "Matthew 19:14"
    },
    {
        text: "Blessed are the pure in heart, for they will see God.",
        authentic: true,
        source: "Matthew 5:8"
    },
    {
        text: "The one who endures to the end will be saved.",
        authentic: true,
        source: "Mark 13:13"
    },
    {
        text: "Where your treasure is, there your heart will be also.",
        authentic: true,
        source: "Luke 12:34"
    },
    {
        text: "I am the resurrection and the life. The one who believes in me will live, even though they die.",
        authentic: true,
        source: "John 11:25"
    },
    {
        text: "Whoever has ears to hear, let them hear.",
        authentic: true,
        source: "Mark 4:9"
    },
    {
        text: "The kingdom is like a woman carrying a jar full of meal. While she was walking on a long road, the handle of the jar broke and the meal emptied out behind her on the road. She did not know it; she had noticed no problem. When she reached her house, she put the jar down and found it empty.",
        authentic: false,
        source: "Gospel of Thomas, saying 97"
    },
    {
        text: "Blessed is she who existed before she came into being. For she who exists has been and shall be.",
        authentic: false,
        source: "Gospel of Mary, 8:18-19"
    },
    {
        text: "Come to me, for my yoke is easy and my lordship is mild, and you will find repose for yourselves.",
        authentic: false,
        source: "Gospel of Thomas, saying 90"
    },
    {
        text: "When you make the two into one, and when you make the inner like the outer and the outer like the inner... then you will enter the kingdom.",
        authentic: false,
        source: "Gospel of Thomas, saying 22"
    },
    {
        text: "I shall give you what no eye has seen and what no ear has heard and what no hand has touched and what has never occurred to the human mind.",
        authentic: false,
        source: "Gospel of Thomas, saying 17"
    },
    {
        text: "Matter gave birth to a passion that has no equal, which proceeded from something contrary to nature. Then there arises a disturbance in its whole body.",
        authentic: false,
        source: "Gospel of Mary, 8:2-3"
    },
    {
        text: "Look, your father and I have been searching for you in great anxiety.",
        authentic: false,
        source: "Infancy Gospel of Thomas, 19:2"
    },
    {
        text: "Look, you have been told everything. Lift up your eyes and look at the cloud and the light within it and the stars surrounding it. And the star that leads the way is your star.",
        authentic: false,
        source: "Gospel of Judas"
    },
    {
        text: "But God caused knowledge to be given to Adam and those with him, so that the kings of chaos and the underworld might not lord it over them.",
        authentic: false,
        source: "Gospel of Judas"
    },
    {
        text: "Already the time has come, brothers, for us to abandon our labor and stand at rest. For whoever stands at rest will rest forever.",
        authentic: false,
        source: "Dialogue of the Savior"
    },
    {
        text: "When you see a single staff, that is the Father. When you see the two, that is the Son, for he is from the Father.",
        authentic: false,
        source: "Gospel of Philip"
    },
    {
        text: "Truth did not come into the world naked, but it came in types and images. One will not receive truth in any other way.",
        authentic: false,
        source: "Gospel of Philip"
    },
    {
        text: "O Soul, see: to thee has come the grace of the Day of Rejoicing; reveal without fear all thy sins today and remember thy end and prepare thyself in thy works.",
        authentic: false,
        source: "Manichaean Psalms to Jesus"
    },
    {
        text: "This is the way of truth, this is the stairway that leads on high, which shall take us on these holy steps!",
        authentic: false,
        source: "Manichaean Psalms to Jesus"
    },
    {
        text: "Peace be with you. My peace I give to you. But let no one receive my peace who is divided in spirit.",
        authentic: false,
        source: "Gospel of Mary, 8:12"
    },
    {
        text: "Where the mind is, there is the treasure. You who have no equal, understand this in your heart.",
        authentic: false,
        source: "Gospel of Mary, 10:14-15"
    },
    {
        text: "The Savior said: Every nature, every modeled form, every creature, exists in and with each other.",
        authentic: false,
        source: "The Sophia of Jesus Christ"
    },
    {
        text: "Whoever drinks from my mouth will become like me; I myself shall become that person, and the hidden things will be revealed.",
        authentic: false,
        source: "Gospel of Philip"
    },
    {
        text: "I have come to make the below like the above and the outside like the inside. I have come to join them at that place.",
        authentic: false,
        source: "Greek Gospel of the Egyptians"
    },
    {
        text: "Blessed are the solitary and elect, for you will find the Kingdom. For you are from it, and to it you will return.",
        authentic: false,
        source: "Book of Thomas the Contender"
    },
    {
        text: "Those who seek should not stop seeking until they find. When they find, they will be disturbed. When they are disturbed, they will marvel.",
        authentic: false,
        source: "Letter of Peter to Philip"
    },
    {
        text: "Become passers-by, for the wisdom of truth is like a passing flash of lightning.",
        authentic: false,
        source: "Apocryphon of James"
    },
    {
        text: "The lamp of the body is the mind. As long as your heart is dark, your mind's lamp sheds no light.",
        authentic: false,
        source: "Dialogue of the Saviour"
    },
    {
        text: "Come to me, all you who are weary and burdened, and I will give you rest.",
        authentic: true,
        source: "Matthew 11:28"
    },
    {
        text: "Do not judge, or you too will be judged. For in the same way you judge others, you will be judged.",
        authentic: true,
        source: "Matthew 7:1-2"
    },
    {
        text: "Therefore I tell you, do not worry about your life, what you will eat or drink; or about your body, what you will wear. Is not life more than food, and the body more than clothes?",
        authentic: true,
        source: "Matthew 6:25"
    },
    {
        text: "You are the light of the world. A city built on a hill cannot be hidden.",
        authentic: true,
        source: "Matthew 5:14"
    },
    {
        text: "If anyone wants to be first, he must be the very last, and the servant of all.",
        authentic: true,
        source: "Mark 9:35"
    },
    {
        text: "What good is it for someone to gain the whole world, yet forfeit their soul?",
        authentic: true,
        source: "Mark 8:36"
    },
    {
        text: "Give to everyone who asks you, and if anyone takes what belongs to you, do not demand it back.",
        authentic: true,
        source: "Luke 6:30"
    },
    {
        text: "Do not be afraid, little flock, for your Father has been pleased to give you the kingdom.",
        authentic: true,
        source: "Luke 12:32"
    },
    {
        text: "If you remain in my word, you are truly my disciples. Then you will know the truth, and the truth will set you free.",
        authentic: true,
        source: "John 8:31-32"
    },
    {
        text: "A new command I give you: Love one another. As I have loved you, so you must love one another.",
        authentic: true,
        source: "John 13:34"
    },
    {
        text: "In this world you will have trouble. But take heart! I have overcome the world.",
        authentic: true,
        source: "John 16:33"
    },
    {
        text: "Blessed are the merciful, for they will be shown mercy.",
        authentic: true,
        source: "Matthew 5:7"
    }
]; 