!function($){

	var children_nodes = [
		[ '学校简介', '学校领导', '机构设置', '党建工作', '校园掠影',	'教学设施',
		  '办学特效', '发展规划', '校风校训','领导关怀','校报校刊',	'联系方式'],
		['校园动态', '图片中心', '学校政务', '媒体广场', '校园公告栏', '宣传法规', 
		  	'校园政策', '信息查询', '政策法规', '60校庆专栏'],
		['招生专栏', '中考信息', '高考辅导', '冲刺高考', '高考信息', '招聘信息'],
		['名师风采', '名师工作室', '教师风采', '教学研究', '教师论坛', '教师作品赏析', 
		 '优秀教案及点评', '优管工作室'],
		['阳光之星', '共青团学生会', '国旗下演讲', '师生作品', '班级主页', '学习网站',
		  '心里咨询', '黄金书屋', '音乐赏析', '高考榜'],
		['教育工作', '教学工作', '学科园地', '教育科研', '新课改', '研究性学习', '教学快递', 
		 '专题讲座', '心理健康', '环境教育', '爱国教育'],
		['2013远程培训', '2012远程培训', '2011远程培训']
	];

	$(document).ready(function(){

		$('.main_menu > ul > li').each(function(i, elem){
			if(i>=children_nodes.length) 
				return;


			$(this).append('<div class="sub_menu_dlg hidden"></div>');

			var sub_menu_dlg = $(this).children('.sub_menu_dlg');
			sub_menu_dlg.append('<ul class="sub_menu"></ul>');

			var sub_menu = sub_menu_dlg.children('.sub_menu');

			for(var j=0; j < children_nodes[i].length; ++j) {
				var child_node = '<li class=\"sub_menu_li\">'+children_nodes[i][j]+'</li>';
				sub_menu.append(child_node);	
			}
		});

		$('.main_menu ul li').mouseover(function(){

			$(this).children('.menu_header').addClass('menu_header_hover');
			$(this).siblings().children('.menu_header').removeClass('menu_header_hover');

			$(this).children('.sub_menu_dlg').removeClass('hidden');
			$(this).siblings().children('.sub_menu_dlg').addClass('hidden');
		});

		$('.main_menu ul li').mouseout(function(){
			$(this).children('.menu_header').removeClass('menu_header_hover');
			$(this).children('.sub_menu_dlg').addClass('hidden');
		});

		$('.sub_menu_dlg').mouseout(function(){
			$(this).siblings('.menu_header').removeClass('menu_header_hover');
			$(this).addClass('hidden');
		});

	});

}(jQuery);