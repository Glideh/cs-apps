import 'js-yaml';
import 'fs';

try {
    var abilities = yaml.safeLoad(fs.readFileSync('./abilities.yml', 'utf8'));
    console.log(abilities);
} catch (e) {
    console.log(e);
}
