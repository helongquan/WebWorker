/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : webworker

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2018-09-24 22:51:45
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for member
-- ----------------------------
DROP TABLE IF EXISTS `member`;
CREATE TABLE `member` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) DEFAULT NULL,
  `skills` varchar(255) DEFAULT NULL,
  `city` varchar(64) DEFAULT NULL,
  `qq` int(32) DEFAULT NULL,
  `sex` varchar(8) DEFAULT NULL,
  `position` varchar(64) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of member
-- ----------------------------
INSERT INTO `member` VALUES ('1', 'jick', 'java,PHP，web前端开发', '深圳', '46557254', '男', '全栈开发', 'test2.html');
INSERT INTO `member` VALUES ('2', '刘波涛', 'html,css,javascript模式设计', '广州', '435766544', '男', 'web前端设计', 'test3.html');
INSERT INTO `member` VALUES ('3', '张宏', 'PS,平面设计，网页设计', '珠海', '765643253', '女', '网页设计', 'test4.html');
INSERT INTO `member` VALUES ('4', '刘娟', 'C，C++,linux内核开发', '深圳', '325437536', '女', '系统开发工程师', 'test5.html');
INSERT INTO `member` VALUES ('5', '周成', 'ruby,python，数据爬虫', '广州', '123354324', '男', '大数据工程师', 'test6.html');
INSERT INTO `member` VALUES ('6', '王皇', '摇滚音乐，音乐制作与设计，动画设计', '上海', '656452346', '女', '音乐制作师', 'test7.html');
INSERT INTO `member` VALUES ('7', '梁伟', '管理，团队建设', '珠海', '767563426', '男', '产品经理人', 'test8.html');
