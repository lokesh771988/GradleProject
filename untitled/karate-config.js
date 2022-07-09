function fn(){
var env = karate.env;
if (!env) {
env = 'dev'; // a custom 'intelligent' default
}
var baseURl = karate.properties['baseURl'];
 karate.log('baseURl:', baseURl);
if (!baseURl) {
baseURl = 'https://reqres.in';
}
config = {
baseURl: baseURl,
mainURl: '/api/users/2'
};
return config;
}