/* 红黑树自身特性：
** 1、每个叶节点都带有两个黑色的NIL；
** 2、根节点必为黑色；
** 3、插入的节点初始必为红色；
** 4、红色节点的两个子节点必为黑色；
** 5、每一叶节点到根节点的路径上黑色的节点个数相同；
*/

/* 红黑树的5种去情况：
** 1、只有根节点，插入的红色变黑色，结束；
** 2、只有两个节点，叶节点加上两个NIL；
** 3、子红父红叔红祖父黑 -> 子红父黑叔黑祖父红；
** 4、左儿子：子红父红叔黑祖父黑 -> 父黑祖父红 + 右旋转；
** 5、右儿子：子红父红叔黑祖父黑 -> ①先以父节点作为根，左旋转，②子节点变黑，祖父变红，③以祖父为根，右旋转； 
*/




