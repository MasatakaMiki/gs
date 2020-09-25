# gs
https://docs.google.com/spreadsheets/d/1OLdWGqWHgu4rXhMJH5n69HPq1ykofX3osn-IOCaqolw/edit?usp=sharing

1行目：テーブル名

2行目：列名

3行目：列の型を選択（int, varchar(255), date, datetime）

4行目以降：insertするレコード

1行目から最終行までを対象列分範囲選択した状態で、
Code.gsを実行すると、新しいシートに、create table文、insert文が生成されます。

※データが入力されたsheetが選択されている状態でないとだめです。すみません。


#Spreadsheetのイメージ
![Img423471](https://user-images.githubusercontent.com/2749524/94250918-d55df480-ff5c-11ea-9438-853d8d5ac8b5.jpg)


#create table文とinsert文をdb fiddleで実行したイメージ
![Img423472](https://user-images.githubusercontent.com/2749524/94251062-02120c00-ff5d-11ea-874b-6045408f8114.jpg)
