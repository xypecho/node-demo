/*
Navicat MySQL Data Transfer

Source Server         : test_localhost
Source Server Version : 50711
Source Host           : localhost:3306
Source Database       : blog

Target Server Type    : MYSQL
Target Server Version : 50711
File Encoding         : 65001

Date: 2018-07-25 21:42:58
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for banner_table
-- ----------------------------
DROP TABLE IF EXISTS `banner_table`;
CREATE TABLE `banner_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Title` varchar(32) DEFAULT NULL,
  `Subtitle` varchar(16) DEFAULT NULL,
  `Src` varchar(258) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of banner_table
-- ----------------------------
INSERT INTO `banner_table` VALUES ('1', '特殊图', '这是副标题', 'images/pic1.jpg');
INSERT INTO `banner_table` VALUES ('2', '这是读儿歌', '十九大卡视角', 'images/pic2.jpg');
INSERT INTO `banner_table` VALUES ('3', '呆呆呆呆呆呆地', '呆呆', 'images/pic3.jpg');
