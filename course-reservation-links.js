(function () {
  const courseLinks = [
    'https://www.tablecheck.com/ja/mutsuki-miyakojima/reserve/menu?menu_lists=6a86b0cc460f3df3bad6bc16',
    'https://www.tablecheck.com/mutsuki-miyakojima/reserve?menu_lists=6a86b145ceea740611afd903',
    'https://www.tablecheck.com/mutsuki-miyakojima/reserve?menu_lists=6a86b1cac365ad47c973ed7d',
    'https://www.tablecheck.com/ja/mutsuki-miyakojima/reserve/message?menu_lists=6a86b1f1438dbc3450d6ac26',
  ];

  courseLinks.forEach(function (url, index) {
    const button = document.querySelector('.crs .r:nth-child(' + (index + 1) + ') .rbtn');
    if (button) button.href = url;
  });
})();
