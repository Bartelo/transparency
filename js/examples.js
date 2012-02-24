(function() {

  window.examples = {
    "assigning-values": {
      coffee: "hello =\n  hello: \"Hello!\"\n  hi:    \"<i>Hi there!</i>\"\n  span:  \"Goodbye!\"\n\n$('.container').render hello",
      jade: ".container\n  #hello\n  .hi\n  span"
    },
    "iterating-over-a-list": {
      coffee: "activities = [\n  date:     '2011-08-23'\n  activity: 'Jogging'\n  comment:  'Early morning run'\n  name:     'Harry Potter'\n,\n  date:     '2011-09-04'\n  activity: 'Gym'\n  comment:  'Chest workout'\n  name:     'Batman'\n]\n\n$('.activities').render activities",
      jade: "table\n  thead\n    tr\n      th Date\n      th Activity\n      th Comment\n      th Name\n  tbody.activities\n    tr\n      td.date\n      td.activity\n      td.comment\n      td.name"
    },
    "nested-lists": {
      coffee: "post =\n  title:    'Hello World',\n  post:     'Hi there it is me',\n  comments: [\n    name: 'John',\n    text: 'That rules'\n  ,\n    name: 'Arnold',\n    text: 'Great post!'\n  ]\n\n$('.container').render post",
      jade: ".container\n  h1.title\n  p.post\n  .comments\n    .comment\n      span.name\n      span.text"
    },
    "nested-objects": {
      coffee: "person =\n  firstname: 'John'\n  lastname: 'Wayne'\n  address:\n    street: '4th Street'\n    city: 'San Francisco'\n    zip: 94199\n\n$(\".person\").render person",
      jade: ".person\n  .firstname\n  .lastname\n  .address\n    .street\n    .zip\n      span.city"
    },
    "directives": {
      coffee: "person =\n  firstname: 'Jasmine'\n  lastname:  'Taylor'\n  email:     'jasmine.tailor@example.com'\n\ndirectives =\n  name:         -> \"\#{@firstname} \#{@lastname}\"\n  'email@href': -> \"mailto:\#{@email}\"\n\n$('.person').render person, directives",
      jade: ".person\n  .name\n  a.email"
    },
    "nested-directives": {
      coffee: "person =\n  firstname: 'Jasmine'\n  lastname: 'Taylor'\n  email: 'jasmine.taylor@example.com'\n  friends: [\n    firstname: 'John'\n    lastname: 'Mayer'\n    email: 'john.mayer@example.com'\n  ,\n    firstname: 'Damien'\n    lastname: 'Rice'\n    email: 'damien.rice@example.com'\n  ]\n\nnameDecorator = ->\n  \"\#{@firstname} \#{@lastname}\"\n\ndirectives =\n  name: nameDecorator\n  friends:\n    name: nameDecorator\n\n$('.person').render person, directives",
      jade: ".person\n  .name\n  .email\n  .friends\n    .friend\n      .name\n      .email"
    }
  };

}).call(this);