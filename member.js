function skillsMember() {
  var member = document.getElementById('member');
  var memberValue = member.options[member.selectedIndex].value;
  var skills = document.getElementById('skills');
  var skillsValue = skills.options[skills.selectedIndex].value;
  if (memberValue == 'member') {
    if (skillsValue == 'skills') {
      document.getElementById('memberSkills').style.display = 'none';
    } else {
      document.getElementById('memberSkills').style.display = 'block';
    }
  } else {
    document.getElementById('memberSkills').style.display = 'none';
  }
}