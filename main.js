$(function () {
  $('#searchWord').keyup(function () {
    let searchWord = $(this).val();
    $('.keywords').each(function () {
      if (this.textContent.match(searchWord)) {
        $(this).closest('.content').css('display', 'block');
      } else {
        $(this).closest('.content').css('display', 'none');
      }
    });
  });
});
