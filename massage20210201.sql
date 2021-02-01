/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 80019
Source Host           : localhost:3306
Source Database       : massage

Target Server Type    : MYSQL
Target Server Version : 80019
File Encoding         : 65001

Date: 2021-02-01 13:16:28
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `aikang_admintab`
-- ----------------------------
DROP TABLE IF EXISTS `aikang_admintab`;
CREATE TABLE `aikang_admintab` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'hrID',
  `company` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `name` varchar(32) DEFAULT NULL COMMENT '姓名',
  `phone` char(11) DEFAULT NULL COMMENT '手机号码',
  `telephone` varchar(16) DEFAULT NULL COMMENT '住宅电话',
  `address` varchar(64) DEFAULT NULL COMMENT '联系地址',
  `enabled` tinyint(1) DEFAULT '1',
  `username` varchar(255) DEFAULT NULL COMMENT '用户名',
  `password` varchar(255) DEFAULT NULL COMMENT '密码',
  `passwordtest` varchar(256) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '时临密码',
  `userface` varchar(255) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `companytest` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '临时公司名称',
  `wndtype` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of aikang_admintab
-- ----------------------------
INSERT INTO `aikang_admintab` VALUES ('15', 'aikang', '系统管理员', '18620889919', null, null, '1', 'admin', '$2a$10$ZavGNPVvu8PA0vsa/fed5OLcoQOjK8rw1oZ2UFMfuiISjfyg9iEj2', '202cb962ac59075b964b07152d234b70', null, null, 'aikang', 'manager_wnd');

-- ----------------------------
-- Table structure for `aikang_cfgdayset`
-- ----------------------------
DROP TABLE IF EXISTS `aikang_cfgdayset`;
CREATE TABLE `aikang_cfgdayset` (
  `id` int NOT NULL AUTO_INCREMENT,
  `company` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `dayidlast` int DEFAULT '0',
  `daynumlast` int DEFAULT '0',
  `dayidlasttime` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `newDayTime` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `roundsetlasttime` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `roundsdx` int DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of aikang_cfgdayset
-- ----------------------------
INSERT INTO `aikang_cfgdayset` VALUES ('1', 'aikang', '1', '20210122', '2021-01-22 19:15:15', '2020-06-13 03:00:32', '2021-01-26 17:18:12', '19');

-- ----------------------------
-- Table structure for `aikang_company`
-- ----------------------------
DROP TABLE IF EXISTS `aikang_company`;
CREATE TABLE `aikang_company` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `seriid` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `username` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT '',
  `cname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `adress` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `shoptime` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT '',
  `telephone` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `mobilephone` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `ismobil` int DEFAULT '0',
  `sevtelephone` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `sevmobilephone` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `notice` varchar(512) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `remark` varchar(512) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `headpic` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `createtime` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `chargetime` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `overtime` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `level` int DEFAULT '0',
  `summoney` double DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of aikang_company
-- ----------------------------
INSERT INTO `aikang_company` VALUES ('3', '11281609843707035969ZW7CjnTG', 'aikang', '$2a$10$ZavGNPVvu8PA0vsa/fed5OLcoQOjK8rw1oZ2UFMfuiISjfyg9iEj2', '爱康推拿(江南西)分店', '江南大道中173号桥鸿大厦301，地铁2号线江南西站E出口，前行30米上斜坡（合家欢超市前）至2楼平台再上三楼。', '早10:00 至 凌晨1:00', '', '18620889919', '0', '020-31950745020-63258977', '18044789919 18266366898', '本店是江南西地区服务最好，按摩手法最正宗的养生推拿按摩店，我们可以负责任的告诉大家，您不来本店按摩，您将错过一个好的身体，那将会是您最大的损失！!', '', 'picu_1611652817949828snck.jpeg', '', '', '2031-06-22 22:21:28', '0', '0');

-- ----------------------------
-- Table structure for `aikang_hr`
-- ----------------------------
DROP TABLE IF EXISTS `aikang_hr`;
CREATE TABLE `aikang_hr` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT 'hrID',
  `company` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `memid` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '员工ID',
  `socialnumber` varchar(32) DEFAULT NULL,
  `name` varchar(32) DEFAULT NULL COMMENT '姓名',
  `sex` varchar(32) DEFAULT NULL,
  `level` int DEFAULT '0',
  `servicecode` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `phone` char(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '手机号码',
  `telephone` varchar(16) DEFAULT NULL COMMENT '住宅电话',
  `address` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '联系地址',
  `enabled` tinyint(1) DEFAULT '1',
  `username` varchar(255) DEFAULT NULL COMMENT '用户名',
  `password` varchar(255) DEFAULT NULL COMMENT '密码',
  `passwordtest` varchar(256) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `userface` varchar(255) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `cloudid` bigint unsigned DEFAULT '0',
  `companytest` varchar(256) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `wndtype` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `wxsessioncode` varchar(256) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `wxopenid` varchar(256) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `wxsessiontempkey` varchar(256) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `isteled` int DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `memid_1` (`memid`,`servicecode`,`phone`,`username`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of aikang_hr
-- ----------------------------
INSERT INTO `aikang_hr` VALUES ('33', 'aikang', '001', '650104197611259016', '刘仁飞1', 'sexm', '0', '79', '18620889919', null, '', '1', '001', '$2a$10$wQVL8zqPpa/1wvEZOcWAoOQ3XFfV3muDUAWp2jfTMWPQtawWmj1IG', '202cb962ac59075b964b07152d234b70', null, '板板', null, 'aikang', null, null, null, null, '0');
INSERT INTO `aikang_hr` VALUES ('34', 'aikang', '002', '', '卫七妹', 'sexw', '0', '77', '14533422323', null, '', '1', '002', '$2a$10$wQVL8zqPpa/1wvEZOcWAoOQ3XFfV3muDUAWp2jfTMWPQtawWmj1IG', '202cb962ac59075b964b07152d234b70', null, '', null, 'aikang', 'manager_wnd', null, null, null, '0');
INSERT INTO `aikang_hr` VALUES ('35', 'aikang', '003', '251212198901084257', '小兰', 'sexw', '0', '82', '18522673578', null, null, '1', '003', '$2a$10$wQVL8zqPpa/1wvEZOcWAoOQ3XFfV3muDUAWp2jfTMWPQtawWmj1IG', '202cb962ac59075b964b07152d234b70', null, '兰兰', null, 'aikang', 'manager_wnd', null, null, null, '0');
INSERT INTO `aikang_hr` VALUES ('36', 'aikang', '004', '6501041978552565652', '勇哥2', 'sexm', '0', '76', '18122562363', null, '发放', '1', '004', '$2a$10$wQVL8zqPpa/1wvEZOcWAoOQ3XFfV3muDUAWp2jfTMWPQtawWmj1IG', null, null, '收到12', null, null, null, null, null, null, '0');
INSERT INTO `aikang_hr` VALUES ('42', 'aikang', '007', '56665445588544545454', '勇哥1', 'sexm', '0', '73', '16523696568', null, null, '1', '007', '$2a$10$k3gEccvvOKyfWJiYwLu1pOoBbaY49tEO7iL3jL7yqU6yLF7kG8nJa', null, null, '12', null, null, null, null, null, null, '0');
INSERT INTO `aikang_hr` VALUES ('43', 'aikang', '006', '650125423655422595542', '嘿哈', 'sexm', '0', '006', '16582567435', null, '', '1', '006', '$2a$10$C71FUlmpmVIUanV1gFzTPuxNxPBQeHDqe2m7D/7JQETO5NFPtUWre', '202cb962ac59075b964b07152d234b70', null, '色', null, 'aikang', 'manager_wnd', null, null, null, '0');
INSERT INTO `aikang_hr` VALUES ('44', 'aikang', '1001', '65554458854454', '梁韵仪', 'sexw', '0', '1', '12512554455', null, '', '1', '1001', '$2a$10$5zUfbw9.FaHouldb3tk4guFmRfAkWaH1B3K2e2y6w4dqANaHzdOi6', '202cb962ac59075b964b07152d234b70', null, '湖北', null, 'aikang', 'manager_wnd', null, null, null, '0');
INSERT INTO `aikang_hr` VALUES ('45', 'aikang', '1002', '234123412342134', '小草', 'sexw', '0', '2', '23322121112', null, '121', '1', '1002', '$2a$10$IBHBh.FWx.Syukd7dbR01e/treda9PifpgppS2AMXvBmrz0V2UcBK', '202cb962ac59075b964b07152d234b70', null, '请问温柔', null, 'aikang', 'manager_wnd', null, null, null, '0');
INSERT INTO `aikang_hr` VALUES ('46', 'aikang', '1003', '', '三姐', 'sexw', '0', '3', '12122211222', null, '', '1', '1003', '$2a$10$JRVGKDrS4Q7WRRvS81NCzutkCTqpLbJ9L8FCmEU1IcembynyeSGSm', '202cb962ac59075b964b07152d234b70', null, '', null, 'aikang', 'manager_wnd', null, null, null, '0');
INSERT INTO `aikang_hr` VALUES ('47', 'aikang', '1005', '', '黄贞初', 'sexm', '0', '5', '', null, null, '1', '1005', '$2a$10$Fbq6we5S2fv.vAytvIkM6ugw1dvvGoofzscTA.fOzAlYriZRvKSSS', '202cb962ac59075b964b07152d234b70', null, '', null, 'aikang', 'manager_wnd', null, null, null, '0');
INSERT INTO `aikang_hr` VALUES ('48', 'aikang', '1007', '', '刘振霞', 'sexw', '4', '7', '121122', null, null, '1', '1007', '$2a$10$235Hsho7VYacd5zmtGIg.eoevPjqeGWKE9zsHGCNuje.RL/YlOUbK', '202cb962ac59075b964b07152d234b70', null, '', null, 'aikang', 'manager_wnd', null, null, null, '0');
INSERT INTO `aikang_hr` VALUES ('49', 'aikang', '1008', '', '杨慧明', 'sexw', '0', '8', '2222111', null, '', '1', '1008', '$2a$10$bhqAafDS0i67zIBq0RRU2e0mOCYaubLXMzRuREuGyBIU8HqfBdT3G', '202cb962ac59075b964b07152d234b70', null, '', null, 'aikang', 'manager_wnd', null, null, null, '0');
INSERT INTO `aikang_hr` VALUES ('50', 'aikang', '1009', '', '黄君慧', 'sexw', '0', '9', '1221', null, null, '1', '1009', '$2a$10$LTB21jd1b87S0J3uzXwyxeA4.mgKQnP7H3rxjQFHzXd5Ftt.Tlvai', '202cb962ac59075b964b07152d234b70', null, '', null, 'aikang', 'manager_wnd', null, null, null, '0');
INSERT INTO `aikang_hr` VALUES ('51', 'aikang', '1010', '', '陈月雪', 'sexw', '0', '10', '211', null, '', '1', '1010', '$2a$10$wzrA6kSZ2w0KBWo7E1IhE.NAPY/8I0uqYNtiugqnwXfKfx4XzJ9v.', '202cb962ac59075b964b07152d234b70', null, '', null, 'aikang', 'manager_wnd', null, null, null, '0');
INSERT INTO `aikang_hr` VALUES ('52', 'aikang', '1011', '', '罗永泽', 'sexm', '0', '11', '12222', null, null, '1', '1011', '$2a$10$fCI60eH4vKsMEvIl5Z1Xp.pJQkDxZuI4YZI8ZWPJjZvkWa.Zo1nFm', '202cb962ac59075b964b07152d234b70', null, '', null, 'aikang', 'manager_wnd', null, null, null, '0');
INSERT INTO `aikang_hr` VALUES ('53', 'aikang', '1012', '', '露露', 'sexw', '0', '12', '1254454', null, '', '1', '1012', '$2a$10$DaBKuIurPM4PSJTwsfF9i./Nh.perfNL/XlHuicoSZuELzQBHo8wK', '202cb962ac59075b964b07152d234b70', null, '', null, 'aikang', 'manager_wnd', null, null, null, '0');
INSERT INTO `aikang_hr` VALUES ('54', 'aikang', '1015', '', '陆建峰', 'sexm', '4', '15', '22', null, null, '1', '1015', '$2a$10$D0bB57ab4Ev0VQc7615iK.mxbYehuhcMBtLYuXcqqDI4PYXtN7MIS', '202cb962ac59075b964b07152d234b70', null, '', null, 'aikang', 'manager_wnd', null, null, null, '0');
INSERT INTO `aikang_hr` VALUES ('55', 'aikang', '1016', '', '张永胜', 'sexm', '0', '16', '6', null, '', '1', '1016', '$2a$10$/ELiOvYoXGFIzmWr5ldYt.Qh/jOBfZQen44CloQBxwRVXaKySFjXG', '202cb962ac59075b964b07152d234b70', null, '', null, 'aikang', 'manager_wnd', null, null, null, '0');
INSERT INTO `aikang_hr` VALUES ('56', 'aikang', '1018', '', '董明武', 'sexm', '0', '18', '18', null, null, '1', '1018', '$2a$10$dN7tX.uouxoOUCo2AWU12uShsAs6kR2dZyhzDwUiZ9.NVIa9Q5c3u', '202cb962ac59075b964b07152d234b70', null, '', null, 'aikang', 'manager_wnd', null, null, null, '0');
INSERT INTO `aikang_hr` VALUES ('57', 'aikang', '1019', '', '程小亮', 'sexm', '0', '19', '19', null, '', '1', '1019', '$2a$10$yeEQ60i8VYMQyAHOuXd6e.Kwen4RSWEXn6iW757nEdtsU1MRJaBIW', '202cb962ac59075b964b07152d234b70', null, '', null, 'aikang', 'manager_wnd', null, null, null, '0');
INSERT INTO `aikang_hr` VALUES ('58', 'aikang', '1020', '', '陈海涛', 'sexw', '0', '20', '20', null, null, '1', '1020', '$2a$10$bEdnhhb21nBzn0h3hLCmx.3eRSJk1M6/8tqdBYSVFCs29tncBbCxq', '202cb962ac59075b964b07152d234b70', null, '', null, 'aikang', 'manager_wnd', null, null, null, '0');
INSERT INTO `aikang_hr` VALUES ('59', 'aikang', '1028', '6521458525455852', '阿桃', 'sexw', '0', '28', '13866957430', null, null, '1', '1028', '$2a$10$H5eKDqmjDigCBQFHnHQi.O4Turs0/iaEFcAcaEZ0Jic4LV2A/FSQK', '202cb962ac59075b964b07152d234b70', null, '', null, 'aikang', 'manager_wnd', null, null, null, '0');
INSERT INTO `aikang_hr` VALUES ('60', 'aikang', '1006', '111111', '张进步', 'sexm', '1', '6', '111111', '', '', '1', '1006', '$2a$10$j4D93XdXXdPenH.O9prvJ.fLx8bOZ3Um4XXtbLDoshS9iCcXagqTO', '202cb962ac59075b964b07152d234b70', '', '', '0', 'aikang', 'manager_wnd', '', '', '', '0');
INSERT INTO `aikang_hr` VALUES ('61', 'aikang', '1022', '111111', '张伟', 'sexm', '0', '22', '1111111212', '', '', '1', '1022', '$2a$10$S0QOmPjwJCTWQtrIAzUJvu6xve.g7r2vovAzKYGxFhlu0tUxakmia', '202cb962ac59075b964b07152d234b70', '', '', '0', 'aikang', 'manager_wnd', '', '', '', '0');

-- ----------------------------
-- Table structure for `aikang_hr_role`
-- ----------------------------
DROP TABLE IF EXISTS `aikang_hr_role`;
CREATE TABLE `aikang_hr_role` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `company` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `hrid` bigint DEFAULT NULL,
  `rid` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `rid` (`rid`),
  KEY `hr_role_ibfk_1` (`hrid`)
) ENGINE=InnoDB AUTO_INCREMENT=255 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of aikang_hr_role
-- ----------------------------
INSERT INTO `aikang_hr_role` VALUES ('226', 'aikang', '33', '1');
INSERT INTO `aikang_hr_role` VALUES ('227', 'aikang', '33', '2');
INSERT INTO `aikang_hr_role` VALUES ('228', 'aikang', '33', '3');
INSERT INTO `aikang_hr_role` VALUES ('229', 'aikang', '33', '4');
INSERT INTO `aikang_hr_role` VALUES ('230', 'aikang', '33', '5');
INSERT INTO `aikang_hr_role` VALUES ('231', 'aikang', '34', '4');
INSERT INTO `aikang_hr_role` VALUES ('232', 'aikang', '34', '3');
INSERT INTO `aikang_hr_role` VALUES ('233', 'aikang', '35', '4');
INSERT INTO `aikang_hr_role` VALUES ('234', 'aikang', '36', '4');
INSERT INTO `aikang_hr_role` VALUES ('235', 'aikang', '43', '5');
INSERT INTO `aikang_hr_role` VALUES ('236', 'aikang', '44', '5');
INSERT INTO `aikang_hr_role` VALUES ('237', 'aikang', '42', '4');
INSERT INTO `aikang_hr_role` VALUES ('238', 'aikang', '45', '5');
INSERT INTO `aikang_hr_role` VALUES ('239', 'aikang', '46', '5');
INSERT INTO `aikang_hr_role` VALUES ('240', 'aikang', '47', '5');
INSERT INTO `aikang_hr_role` VALUES ('241', 'aikang', '48', '5');
INSERT INTO `aikang_hr_role` VALUES ('242', 'aikang', '49', '5');
INSERT INTO `aikang_hr_role` VALUES ('243', 'aikang', '50', '5');
INSERT INTO `aikang_hr_role` VALUES ('244', 'aikang', '51', '5');
INSERT INTO `aikang_hr_role` VALUES ('245', 'aikang', '52', '5');
INSERT INTO `aikang_hr_role` VALUES ('246', 'aikang', '53', '5');
INSERT INTO `aikang_hr_role` VALUES ('247', 'aikang', '54', '5');
INSERT INTO `aikang_hr_role` VALUES ('248', 'aikang', '55', '5');
INSERT INTO `aikang_hr_role` VALUES ('249', 'aikang', '56', '5');
INSERT INTO `aikang_hr_role` VALUES ('250', 'aikang', '57', '5');
INSERT INTO `aikang_hr_role` VALUES ('251', 'aikang', '58', '5');
INSERT INTO `aikang_hr_role` VALUES ('252', 'aikang', '59', '5');
INSERT INTO `aikang_hr_role` VALUES ('253', 'aikang', '60', '5');
INSERT INTO `aikang_hr_role` VALUES ('254', 'aikang', '61', '5');

-- ----------------------------
-- Table structure for `aikang_huiyuan`
-- ----------------------------
DROP TABLE IF EXISTS `aikang_huiyuan`;
CREATE TABLE `aikang_huiyuan` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `company` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `companycname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `cardid` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `password` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `upass` bit(1) DEFAULT b'0',
  `seriid` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `typeseriid` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `typeid` bigint DEFAULT '0',
  `typecname` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `sex` bit(1) DEFAULT b'0',
  `hycname` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `phonecode` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `adress` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `workadress` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `birthday` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `identitycode` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `profession` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `closedate` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `rmoney` double DEFAULT '0',
  `summoney` double DEFAULT '0',
  `sudmoney` double DEFAULT '0',
  `disrate` double DEFAULT '0',
  `savepoint` double DEFAULT '0',
  `createdate` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `lastchagredate` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of aikang_huiyuan
-- ----------------------------
INSERT INTO `aikang_huiyuan` VALUES ('2', 'aikang', '爱康养生', 'AKJNX000001', '687256', '', '11608123714263000enfTEx2x', '11607765605570000tRj7bRZn', '8', 'VIP会员九折卡', '\0', '刘仁飞', '18620889919', '', '', '', '', '', '2071-01-01 00:00:00', '577.6999999999998', '17200', '0', '0.9', '0', '2020-12-16 21:01:54', '2020-12-16 21:01:54');
INSERT INTO `aikang_huiyuan` VALUES ('4', 'aikang', '爱康养生', 'AKJNX000003', '687256', '', '21608124037334000Zr2ST8CP', '21607942958586000wZcMRx4P', '9', 'VIP会员1800送400', '\0', '刘仁飞', '18620889919', '', '', '', '', '', '2071-01-01 00:00:00', '5904', '5400', '0', '1', '0', '2020-12-16 21:07:17', '2020-12-16 21:07:17');
INSERT INTO `aikang_huiyuan` VALUES ('5', 'aikang', '爱康养生', 'AKJNX00004', '687256', '', '11608124377721000kWPeKkB5', '11607765605570000tRj7bRZn', '8', 'VIP会员九折卡', '\0', '韦广合', '13622826779', '', '', '', '', '', '2071-01-01 00:00:00', '800', '0', '0', '0.9', '0', '2020-12-16 21:12:57', '2020-12-16 21:12:57');
INSERT INTO `aikang_huiyuan` VALUES ('6', 'aikang', '爱康养生', 'AKJNX000005', '0', '\0', '11608196985835000FiKJNkeG', '11607765605570000tRj7bRZn', '8', 'VIP会员九折卡', '\0', '吴小', '18200997817', '', '', '', '', '', '2071-01-01 00:00:00', '800', '0', '0', '0.9', '0', '2020-12-17 17:23:05', '2020-12-17 17:23:05');
INSERT INTO `aikang_huiyuan` VALUES ('7', 'aikang', '爱康养生', 'AKJNX000006', '0', '\0', '11608197080523000tRb4jNKz', '11607765605570000tRj7bRZn', '8', 'VIP会员九折卡', '\0', '王彤煜', '13711561996', '', '', '', '', '', '2071-01-01 00:00:00', '800', '0', '0', '0.9', '0', '2020-12-17 17:24:40', '2020-12-17 17:24:40');
INSERT INTO `aikang_huiyuan` VALUES ('8', 'aikang', '爱康养生', 'AKJNX0000007', '0', '\0', '31608197260704000ZNfscdKy', '316081972145480008nd2xBCj', '10', 'VIP会员充2800送800', '\0', '汤姐', '18903018369', '', '', '', '', '', '2071-01-01 00:00:00', '2800', '0', '0', '1', '0', '2020-12-17 17:27:40', '2020-12-17 17:27:40');
INSERT INTO `aikang_huiyuan` VALUES ('9', 'aikang', '爱康养生', 'AKJNX0000008', '0', '\0', '216081973327300007Qk8HkpQ', '21607942958586000wZcMRx4P', '9', 'VIP会员1800送400', '\0', '戴先生', '13602772638', '', '', '', '', '', '2071-01-01 00:00:00', '1800', '0', '0', '1', '0', '2020-12-17 17:28:52', '2020-12-17 17:28:52');
INSERT INTO `aikang_huiyuan` VALUES ('10', 'aikang', '爱康养生', 'AKJNXD0009', '0', '\0', '31608197406957000xZdd8EM3', '316081972145480008nd2xBCj', '10', 'VIP会员充2800送800', '\0', '东哥', '15302209139', '', '', '', '', '', '2071-01-01 00:00:00', '2800', '0', '0', '1', '0', '2020-12-17 17:30:06', '2020-12-17 17:30:06');
INSERT INTO `aikang_huiyuan` VALUES ('11', 'aikang', '爱康养生', 'AKJNX000010', '0', '\0', '11608199349993000fpxf6dEJ', '11607765605570000tRj7bRZn', '8', 'VIP会员九折卡', '\0', '陈秀芬', '13632449927', '江南中街道', '', '19680211', '44212501454542154455', '退休', '2071-01-01 00:00:00', '800', '0', '0', '0.9', '0', '2020-12-17 18:02:29', '2020-12-17 18:02:29');
INSERT INTO `aikang_huiyuan` VALUES ('12', 'aikang', '爱康养生', 'AKJNX000011', '0', '\0', '11608199522447000diZ6mDwy', '11607765605570000tRj7bRZn', '8', 'VIP会员九折卡', '\0', '冯先生', '13929599635', '', '', '', '', '', '2071-01-01 00:00:00', '800', '0', '0', '0.9', '0', '2020-12-17 18:05:22', '2020-12-17 18:05:22');
INSERT INTO `aikang_huiyuan` VALUES ('13', 'aikang', '爱康养生', 'AKJNX000012', '0', '\0', '11608199672653000ct2t54jy', '11607765605570000tRj7bRZn', '8', 'VIP会员九折卡', '\0', '王先生', '13416379068', '', '', '', '', '', '2071-01-01 00:00:00', '800', '0', '0', '0.9', '0', '2020-12-17 18:07:52', '2020-12-17 18:07:52');
INSERT INTO `aikang_huiyuan` VALUES ('14', 'aikang', '爱康养生', 'AKJNX000013', '0', '\0', '11608199736826000yxQy7dQX', '11607765605570000tRj7bRZn', '8', 'VIP会员九折卡', '\0', '宁海倩', '13751729689', '', '', '', '', '', '2071-01-01 00:00:00', '800', '0', '0', '0.9', '0', '2020-12-17 18:08:56', '2020-12-17 18:08:56');
INSERT INTO `aikang_huiyuan` VALUES ('15', 'aikang', '爱康养生', 'AKJNX000014', '0', '\0', '11608199769582000bxSQtBzi', '11607765605570000tRj7bRZn', '8', 'VIP会员九折卡', '\0', '何先生', '13535116118', '', '', '', '', '', '2071-01-01 00:00:00', '800', '0', '0', '0.9', '0', '2020-12-17 18:09:29', '2020-12-17 18:09:29');
INSERT INTO `aikang_huiyuan` VALUES ('16', 'aikang', '爱康养生', 'AKJNX00015', '0', '\0', '11608210012860000XXeNySQ4', '11607765605570000tRj7bRZn', '8', 'VIP会员九折卡', '\0', '卫女士', '13711778047', '', '', '', '', '', '2071-01-01 00:00:00', '800', '800', '0', '0.9', '0', '2020-12-17 21:00:12', '2020-12-17 21:00:12');
INSERT INTO `aikang_huiyuan` VALUES ('19', 'aikang', '爱康养生', 'AKJNX00016', '0', '\0', '11608557186591000xcPzjGz4', '11607765605570000tRj7bRZn', '8', 'VIP会员九折卡', '\0', '谢舒丽', '15173570000', '', '', '', '', '', '2071-01-01 00:00:00', '800', '800', '0', '0.9', '0', '2020-12-21 21:26:26', '2020-12-21 21:26:26');
INSERT INTO `aikang_huiyuan` VALUES ('20', 'aikang', '爱康养生', 'AKJNX00017', '0', '\0', '11608557589699000c8DXiRzy', '11607765605570000tRj7bRZn', '8', 'VIP会员九折卡', '\0', '陆丽珍', '13632440616', '', '', '', '', '', '2071-01-01 00:00:00', '800', '800', '0', '0.9', '0', '2020-12-21 21:33:09', '2020-12-21 21:33:09');
INSERT INTO `aikang_huiyuan` VALUES ('21', 'aikang', '爱康养生', 'AKJNK00018', '0', '\0', '11608557635256000aPNwrWQT', '11607765605570000tRj7bRZn', '8', 'VIP会员九折卡', '\0', '梁玉珍', '18028058403', '', '', '', '', '', '2071-01-01 00:00:00', '800', '800', '0', '0.9', '0', '2020-12-21 21:33:55', '2020-12-21 21:33:55');
INSERT INTO `aikang_huiyuan` VALUES ('22', 'aikang', '爱康养生', 'AKJNX00019', '0', '\0', '11608557677731000xpaWGMpX', '11607765605570000tRj7bRZn', '8', 'VIP会员九折卡', '\0', '邓华', '13802741710', '', '', '', '', '', '2071-01-01 00:00:00', '1600', '1600', '0', '0.9', '0', '2020-12-21 21:34:37', '2020-12-21 21:34:37');
INSERT INTO `aikang_huiyuan` VALUES ('23', 'aikang', '爱康养生', 'AKJNX00020', '0', '\0', '21608557737090000RCaGT8Qm', '21607942958586000wZcMRx4P', '9', 'VIP会员1800送400', '\0', '赵小姐', '13503039406', '', '', '', '', '', '2071-01-01 00:00:00', '1800', '1800', '0', '1', '0', '2020-12-21 21:35:37', '2020-12-21 21:35:37');
INSERT INTO `aikang_huiyuan` VALUES ('24', 'aikang', '爱康养生', 'AKJNX000021', '123', '', '21611052637994000BJQDXxmW', '21607942958586000wZcMRx4P', '9', 'VIP会员1800送400', '\0', 'HEITOU', '18620889912', '', '', '', '', '', '2071-01-01 00:00:00', '1800', '1800', '0', '1', '0', '2021-01-19 18:37:17', '2021-01-19 18:37:17');
INSERT INTO `aikang_huiyuan` VALUES ('25', 'aikang', '爱康养生', 'AKJNX000022', '0', '\0', '21611052946723000AtYD5G7f', '21607942958586000wZcMRx4P', '9', 'VIP会员1800送400', '\0', '瓦斯撒', '18620889922', '', '', '', '', '', '2071-01-01 00:00:00', '2200', '2200', '0', '1', '0', '2021-01-19 18:42:26', '2021-01-19 18:42:26');
INSERT INTO `aikang_huiyuan` VALUES ('26', 'aikang', '%E7%88%B1%E5%BA%B7%E6%8E%A8%E6%8B%BF(%E6%B1%9F%E5%8D%97%E8%A5%BF)%E5%88%86%E5%BA%97', 'AKJNX000023', '0', '\0', '316110544406140005kENkF2M', '316081972145480008nd2xBCj', '10', 'VIP会员充2800送800', '\0', '刘仁飞', '18620889919', '', '', '', '', '', '2071-01-01 00:00:00', '3334', '3600', '0', '1', '0', '2021-01-19 19:07:20', '2021-01-19 19:07:20');
INSERT INTO `aikang_huiyuan` VALUES ('27', 'aikang', '%E7%88%B1%E5%BA%B7%E6%8E%A8%E6%8B%BF(%E6%B1%9F%E5%8D%97%E8%A5%BF)%E5%88%86%E5%BA%97', 'AKZJX000024', '0', '\0', '21611377989029000HyMSbsb3', '21607942958586000wZcMRx4P', '9', 'VIP会员1800送400', '\0', 'ERHAHA', '13280472235', '', '', '', '', '', '2071-01-01 00:00:00', '4450', '3650', '400', '1', '0', '2021-01-23 12:59:49', '2021-01-23 12:59:49');
INSERT INTO `aikang_huiyuan` VALUES ('28', 'aikang', '%E7%88%B1%E5%BA%B7%E6%8E%A8%E6%8B%BF(%E6%B1%9F%E5%8D%97%E8%A5%BF)%E5%88%86%E5%BA%97', 'AKJNX000025', '0', '\0', '316113789225230008hA34nGc', '316081972145480008nd2xBCj', '10', 'VIP会员充2800送800', '\0', 'CHARISMOS', '18682669896', '', '', '', '', '', '2071-01-01 00:00:00', '7200', '5600', '1600', '1', '0', '2021-01-23 13:15:22', '2021-01-23 13:15:22');

-- ----------------------------
-- Table structure for `aikang_huiyuantraderecord`
-- ----------------------------
DROP TABLE IF EXISTS `aikang_huiyuantraderecord`;
CREATE TABLE `aikang_huiyuantraderecord` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `company` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `seriid` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `hyid` bigint DEFAULT '0',
  `hyseriid` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `hyname` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `trademoney` double DEFAULT '0',
  `tradetype` int DEFAULT '0',
  `tradename` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `workerid` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `workername` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `recdate` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `daynum` int DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of aikang_huiyuantraderecord
-- ----------------------------
INSERT INTO `aikang_huiyuantraderecord` VALUES ('1', 'aikang', '11608557189945000rwn7Ddh2', '19', '11608557186591000xcPzjGz4', '谢舒丽', '800', '0', '办卡', '3', '系统管理员', '2020-12-21 21:26:26', '20201221');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('2', 'aikang', '11608557593730000tAysM6mt', '20', '11608557589699000c8DXiRzy', '陆丽珍', '800', '0', '办卡', '3', '系统管理员', '2020-12-21 21:33:09', '20201221');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('3', 'aikang', '11608557635257000WSXFcDiT', '21', '11608557635256000aPNwrWQT', '梁玉珍', '800', '0', '办卡', '3', '系统管理员', '2020-12-21 21:33:55', '20201221');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('4', 'aikang', '11608557677733000fp2NpQTQ', '22', '11608557677731000xpaWGMpX', '邓华', '800', '0', '办卡', '3', '系统管理员', '2020-12-21 21:34:37', '20201221');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('5', 'aikang', '21608557737091000FBC8rFRx', '23', '21608557737090000RCaGT8Qm', '赵小姐', '1800', '0', '办卡', '3', '系统管理员', '2020-12-21 21:35:37', '20201221');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('6', 'aikang', '11608623116842000jesCktAk', '22', '11608557677731000xpaWGMpX', '邓华', '800', '1', '充值', '3', '系统管理员', '2020-12-21 21:34:37', '20201222');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('9', 'aikang', '21608875214866000Gz2FYEE7', '2', '11608123714263000enfTEx2x', '刘仁飞', '-7359.400000000001', '5', '透支', '3', '系统管理员', '2020-12-25 13:46:54', '20201225');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('10', 'aikang', '11608875374200000JaEtbzK7', '2', '11608123714263000enfTEx2x', '刘仁飞', '800', '1', '充值', '3', '系统管理员', '2020-12-25 13:49:34', '20201225');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('11', 'aikang', '11608875395867000sh6sAfmx', '2', '11608123714263000enfTEx2x', '刘仁飞', '5000', '1', '充值', '3', '系统管理员', '2020-12-25 13:49:55', '20201225');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('12', 'aikang', '116088754093160005iyFJHG8', '2', '11608123714263000enfTEx2x', '刘仁飞', '2000', '1', '充值', '3', '系统管理员', '2020-12-25 13:50:09', '20201225');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('13', 'aikang', '21608884921424000wJ3PpETP', '2', '11608123714263000enfTEx2x', '刘仁飞', '-265.90000000000055', '5', '透支', '3', '系统管理员', '2020-12-25 16:28:41', '20201225');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('14', 'aikang', '21608885019677000tcsizkfH', '2', '11608123714263000enfTEx2x', '刘仁飞', '-582.7000000000005', '5', '透支', '3', '系统管理员', '2020-12-25 16:30:19', '20201225');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('15', 'aikang', '21608886857868000KJ5Ws3kB', '2', '11608123714263000enfTEx2x', '刘仁飞', '141.3', '4', '补差价', '3', '系统管理员', '2020-12-25 17:00:57', '20201225');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('16', 'aikang', '11608886879240000wYahbrJS', '2', '11608123714263000enfTEx2x', '刘仁飞', '800', '1', '充值', '3', '系统管理员', '2020-12-25 17:01:19', '20201225');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('17', 'aikang', '21608887386570000aMexyTRW', '2', '11608123714263000enfTEx2x', '刘仁飞', '33.40000000000007', '4', '补差价', '3', '系统管理员', '2020-12-25 17:09:46', '20201225');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('18', 'aikang', '21608887491144000tmPcFHzt', '2', '11608123714263000enfTEx2x', '刘仁飞', '39.6', '5', '透支', '3', '系统管理员', '2020-12-25 17:11:31', '20201225');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('19', 'aikang', '21608887585852000hfpx6GY6', '2', '11608123714263000enfTEx2x', '刘仁飞', '39.6', '4', '补差价', '3', '系统管理员', '2020-12-25 17:13:05', '20201225');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('20', 'aikang', '21608887715885000ewrGCxAC', '2', '11608123714263000enfTEx2x', '刘仁飞', '56.7', '5', '透支', '3', '系统管理员', '2020-12-25 17:15:15', '20201225');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('21', 'aikang', '21608887789291000cW2MdTef', '2', '11608123714263000enfTEx2x', '刘仁飞', '680.4', '5', '透支', '3', '系统管理员', '2020-12-25 17:16:29', '20201225');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('22', 'aikang', '11608887807357000pMjYyrd2', '2', '11608123714263000enfTEx2x', '刘仁飞', '800', '1', '充值', '3', '系统管理员', '2020-12-25 17:16:47', '20201225');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('23', 'aikang', '21608887930612000ekXhaGww', '2', '11608123714263000enfTEx2x', '刘仁飞', '33.40000000000005', '5', '透支', '3', '系统管理员', '2020-12-25 17:18:50', '20201225');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('24', 'aikang', '216088879804470007XSMwZZX', '2', '11608123714263000enfTEx2x', '刘仁飞', '56.7', '4', '补差价', '3', '系统管理员', '2020-12-25 17:19:40', '20201225');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('25', 'aikang', '11608888029906000zSM2YTFX', '2', '11608123714263000enfTEx2x', '刘仁飞', '800', '1', '充值', '3', '系统管理员', '2020-12-25 17:20:29', '20201225');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('26', 'aikang', '21608888133861000ynn83D6j', '2', '11608123714263000enfTEx2x', '刘仁飞', '83.90000000000009', '4', '补差价', '3', '系统管理员', '2020-12-25 17:22:13', '20201225');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('27', 'aikang', '21608889913389000RWzZWjew', '2', '11608123714263000enfTEx2x', '刘仁飞', '170.1', '5', '透支', '3', '系统管理员', '2020-12-25 17:51:53', '20201225');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('28', 'aikang', '11610442476898000haNGp448', '2', '11608123714263000enfTEx2x', '刘仁飞', '800', '1', '充值', '15', '系统管理员', '2021-01-12 17:07:56', '20210112');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('29', 'aikang', '11610442504039000hAAiRM7F', '2', '11608123714263000enfTEx2x', '刘仁飞', '800', '1', '充值', '15', '系统管理员', '2021-01-12 17:08:24', '20210112');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('30', 'aikang', '11610520698436000FnnraNeR', '2', '11608123714263000enfTEx2x', '刘仁飞', '800', '1', '充值', '15', '系统管理员', '2021-01-13 14:51:38', '20210113');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('31', 'aikang', '11610684328217000YG7Mjk6m', '2', '11608123714263000enfTEx2x', '刘仁飞', '800', '1', '充值', '15', '系统管理员', '2021-01-15 12:18:48', '20210115');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('32', 'aikang', '11610684558271000FffsCnKJ', '2', '11608123714263000enfTEx2x', '刘仁飞', '1200', '1', '充值', '15', '系统管理员', '2021-01-15 12:22:38', '20210115');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('33', 'aikang', '11611051955301000M2zB7658', '2', '11608123714263000enfTEx2x', '刘仁飞', '800', '1', '充值', '15', '系统管理员', '2021-01-19 18:25:55', '20210119');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('34', 'aikang', '11611051968944000DRp8hcMS', '2', '11608123714263000enfTEx2x', '刘仁飞', '1000', '1', '充值', '15', '系统管理员', '2021-01-19 18:26:08', '20210119');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('35', 'aikang', '21611052022720000aRwnBnAz', '4', '21608124037334000Zr2ST8CP', '刘仁飞', '1800', '1', '充值', '15', '系统管理员', '2021-01-19 18:27:02', '20210119');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('36', 'aikang', '21611052049875000C2hHAhWT', '4', '21608124037334000Zr2ST8CP', '刘仁飞', '1800', '1', '充值', '15', '系统管理员', '2021-01-19 18:27:29', '20210119');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('37', 'aikang', '21611052546707000Gtf6Mmjz', '4', '21608124037334000Zr2ST8CP', '刘仁飞', '1800', '1', '充值', '15', '系统管理员', '2021-01-19 18:35:46', '20210119');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('38', 'aikang', '21611052637994000J4hNCnWN', '24', '21611052637994000BJQDXxmW', '0', '1800', '0', '办卡', '15', '系统管理员', '2021-01-19 18:37:17', '20210119');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('39', 'aikang', '21611052946724000krfXKhnQ', '25', '21611052946723000AtYD5G7f', '瓦斯撒', '1800', '0', '办卡', '15', '系统管理员', '2021-01-19 18:42:26', '20210119');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('40', 'aikang', '31611054440616000FkrQbEm5', '26', '316110544406140005kENkF2M', '刘仁飞', '2800', '0', '办卡', '15', '系统管理员', '2021-01-19 19:07:20', '20210119');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('41', 'aikang', '11611114928196000EBAR2Bx2', '2', '11608123714263000enfTEx2x', '刘仁飞', '800', '1', '充值', '15', '系统管理员', '2021-01-20 11:55:28', '20210120');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('42', 'aikang', '21611377989072000FzTY2h5x', '27', '21611377989029000HyMSbsb3', 'ERHAHA', '1800', '0', '办卡', '15', '系统管理员', '2021-01-23 12:59:49', '20210123');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('43', 'aikang', '21611377989072000HMHtkjE4', '27', '21611377989029000HyMSbsb3', 'ERHAHA', '400', '6', '办卡赠送', '15', '系统管理员', '2021-01-23 12:59:49', '20210123');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('44', 'aikang', '21611378789135000hCb8GXtJ', '27', '21611377989029000HyMSbsb3', 'ERHAHA', '1850', '1', '充值', '15', '系统管理员', '2021-01-23 13:13:09', '20210123');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('45', 'aikang', '21611378789135000hCb8GXtJ', '27', '21611377989029000HyMSbsb3', 'ERHAHA', '400', '6', '充值赠送', '15', '系统管理员', '2021-01-23 13:13:09', '20210123');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('46', 'aikang', '31611378922534000307fxGNH', '28', '316113789225230008hA34nGc', 'CHARISMOS', '2800', '0', '办卡', '15', '系统管理员', '2021-01-23 13:15:22', '20210123');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('47', 'aikang', '31611378922534000DiRktimJ', '28', '316113789225230008hA34nGc', 'CHARISMOS', '800', '6', '办卡赠送', '15', '系统管理员', '2021-01-23 13:15:22', '20210123');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('48', 'aikang', '31611378953589000DsYnaw4N', '28', '316113789225230008hA34nGc', 'CHARISMOS', '2800', '1', '充值', '15', '系统管理员', '2021-01-23 13:15:53', '20210123');
INSERT INTO `aikang_huiyuantraderecord` VALUES ('49', 'aikang', '31611378953589000DsYnaw4N', '28', '316113789225230008hA34nGc', 'CHARISMOS', '800', '6', '充值赠送', '15', '系统管理员', '2021-01-23 13:15:53', '20210123');

-- ----------------------------
-- Table structure for `aikang_huiyuantype`
-- ----------------------------
DROP TABLE IF EXISTS `aikang_huiyuantype`;
CREATE TABLE `aikang_huiyuantype` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `company` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `sdx` int DEFAULT '0',
  `typename` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `seriid` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `rechargeam` double DEFAULT NULL,
  `overam` double DEFAULT NULL,
  `giftam` double DEFAULT NULL,
  `disrate` double DEFAULT NULL,
  `actdays` double DEFAULT NULL,
  `enable` bit(1) DEFAULT NULL,
  `limitcharge` bit(1) DEFAULT NULL,
  `maxdef` double DEFAULT NULL,
  `csalary` double DEFAULT '0',
  `rsalary` double DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of aikang_huiyuantype
-- ----------------------------
INSERT INTO `aikang_huiyuantype` VALUES ('8', 'aikang', '1', 'VIP会员九折卡', '11607765605570000tRj7bRZn', '800', '10000', '0', '0.9', '0', '', '', '10', '20', '10');
INSERT INTO `aikang_huiyuantype` VALUES ('9', 'aikang', '2', 'VIP会员1800送400', '21607942958586000wZcMRx4P', '1800', '0', '400', '1', '0', '', '\0', '10', '45', '22');
INSERT INTO `aikang_huiyuantype` VALUES ('10', 'aikang', '3', 'VIP会员充2800送800', '316081972145480008nd2xBCj', '2800', '0', '800', '1', '0', '', '', '10', '70', '35');

-- ----------------------------
-- Table structure for `aikang_menu_role`
-- ----------------------------
DROP TABLE IF EXISTS `aikang_menu_role`;
CREATE TABLE `aikang_menu_role` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `company` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `mid` int DEFAULT NULL,
  `rid` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mid` (`mid`),
  KEY `rid` (`rid`),
  CONSTRAINT `aikang_menu_role_ibfk_1` FOREIGN KEY (`mid`) REFERENCES `menu` (`id`) ON DELETE SET NULL ON UPDATE SET NULL,
  CONSTRAINT `aikang_menu_role_ibfk_2` FOREIGN KEY (`rid`) REFERENCES `role` (`id`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=831 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of aikang_menu_role
-- ----------------------------
INSERT INTO `aikang_menu_role` VALUES ('459', 'aikang', '46', '13');
INSERT INTO `aikang_menu_role` VALUES ('460', 'aikang', '44', '13');
INSERT INTO `aikang_menu_role` VALUES ('461', 'aikang', '43', '14');
INSERT INTO `aikang_menu_role` VALUES ('572', 'aikang', '75', '5');
INSERT INTO `aikang_menu_role` VALUES ('573', 'aikang', '76', '5');
INSERT INTO `aikang_menu_role` VALUES ('722', 'aikang', '49', '1');
INSERT INTO `aikang_menu_role` VALUES ('723', 'aikang', '50', '1');
INSERT INTO `aikang_menu_role` VALUES ('724', 'aikang', '43', '1');
INSERT INTO `aikang_menu_role` VALUES ('725', 'aikang', '44', '1');
INSERT INTO `aikang_menu_role` VALUES ('726', 'aikang', '45', '1');
INSERT INTO `aikang_menu_role` VALUES ('727', 'aikang', '46', '1');
INSERT INTO `aikang_menu_role` VALUES ('728', 'aikang', '40', '1');
INSERT INTO `aikang_menu_role` VALUES ('729', 'aikang', '48', '1');
INSERT INTO `aikang_menu_role` VALUES ('730', 'aikang', '59', '1');
INSERT INTO `aikang_menu_role` VALUES ('731', 'aikang', '58', '1');
INSERT INTO `aikang_menu_role` VALUES ('732', 'aikang', '54', '1');
INSERT INTO `aikang_menu_role` VALUES ('733', 'aikang', '55', '1');
INSERT INTO `aikang_menu_role` VALUES ('734', 'aikang', '56', '1');
INSERT INTO `aikang_menu_role` VALUES ('735', 'aikang', '64', '1');
INSERT INTO `aikang_menu_role` VALUES ('736', 'aikang', '63', '1');
INSERT INTO `aikang_menu_role` VALUES ('737', 'aikang', '62', '1');
INSERT INTO `aikang_menu_role` VALUES ('738', 'aikang', '61', '1');
INSERT INTO `aikang_menu_role` VALUES ('739', 'aikang', '66', '1');
INSERT INTO `aikang_menu_role` VALUES ('740', 'aikang', '72', '1');
INSERT INTO `aikang_menu_role` VALUES ('741', 'aikang', '73', '1');
INSERT INTO `aikang_menu_role` VALUES ('742', 'aikang', '74', '1');
INSERT INTO `aikang_menu_role` VALUES ('743', 'aikang', '79', '1');
INSERT INTO `aikang_menu_role` VALUES ('744', 'aikang', '80', '1');
INSERT INTO `aikang_menu_role` VALUES ('745', 'aikang', '81', '1');
INSERT INTO `aikang_menu_role` VALUES ('746', 'aikang', '82', '1');
INSERT INTO `aikang_menu_role` VALUES ('747', 'aikang', '85', '1');
INSERT INTO `aikang_menu_role` VALUES ('748', 'aikang', '86', '1');
INSERT INTO `aikang_menu_role` VALUES ('749', 'aikang', '87', '1');
INSERT INTO `aikang_menu_role` VALUES ('750', 'aikang', '88', '1');
INSERT INTO `aikang_menu_role` VALUES ('751', 'aikang', '76', '1');
INSERT INTO `aikang_menu_role` VALUES ('752', 'aikang', '75', '1');
INSERT INTO `aikang_menu_role` VALUES ('753', 'aikang', '90', '1');
INSERT INTO `aikang_menu_role` VALUES ('754', 'aikang', '91', '1');
INSERT INTO `aikang_menu_role` VALUES ('755', 'aikang', '92', '1');
INSERT INTO `aikang_menu_role` VALUES ('756', 'aikang', '93', '1');
INSERT INTO `aikang_menu_role` VALUES ('757', 'aikang', '43', '2');
INSERT INTO `aikang_menu_role` VALUES ('758', 'aikang', '44', '2');
INSERT INTO `aikang_menu_role` VALUES ('759', 'aikang', '45', '2');
INSERT INTO `aikang_menu_role` VALUES ('760', 'aikang', '46', '2');
INSERT INTO `aikang_menu_role` VALUES ('761', 'aikang', '49', '2');
INSERT INTO `aikang_menu_role` VALUES ('762', 'aikang', '50', '2');
INSERT INTO `aikang_menu_role` VALUES ('763', 'aikang', '55', '2');
INSERT INTO `aikang_menu_role` VALUES ('764', 'aikang', '54', '2');
INSERT INTO `aikang_menu_role` VALUES ('765', 'aikang', '56', '2');
INSERT INTO `aikang_menu_role` VALUES ('766', 'aikang', '59', '2');
INSERT INTO `aikang_menu_role` VALUES ('767', 'aikang', '58', '2');
INSERT INTO `aikang_menu_role` VALUES ('768', 'aikang', '61', '2');
INSERT INTO `aikang_menu_role` VALUES ('769', 'aikang', '62', '2');
INSERT INTO `aikang_menu_role` VALUES ('770', 'aikang', '63', '2');
INSERT INTO `aikang_menu_role` VALUES ('771', 'aikang', '64', '2');
INSERT INTO `aikang_menu_role` VALUES ('772', 'aikang', '66', '2');
INSERT INTO `aikang_menu_role` VALUES ('773', 'aikang', '79', '2');
INSERT INTO `aikang_menu_role` VALUES ('774', 'aikang', '80', '2');
INSERT INTO `aikang_menu_role` VALUES ('775', 'aikang', '81', '2');
INSERT INTO `aikang_menu_role` VALUES ('776', 'aikang', '85', '2');
INSERT INTO `aikang_menu_role` VALUES ('777', 'aikang', '86', '2');
INSERT INTO `aikang_menu_role` VALUES ('778', 'aikang', '87', '2');
INSERT INTO `aikang_menu_role` VALUES ('779', 'aikang', '88', '2');
INSERT INTO `aikang_menu_role` VALUES ('780', 'aikang', '90', '2');
INSERT INTO `aikang_menu_role` VALUES ('781', 'aikang', '91', '2');
INSERT INTO `aikang_menu_role` VALUES ('782', 'aikang', '92', '2');
INSERT INTO `aikang_menu_role` VALUES ('783', 'aikang', '93', '2');
INSERT INTO `aikang_menu_role` VALUES ('784', 'aikang', '45', '3');
INSERT INTO `aikang_menu_role` VALUES ('785', 'aikang', '46', '3');
INSERT INTO `aikang_menu_role` VALUES ('786', 'aikang', '49', '3');
INSERT INTO `aikang_menu_role` VALUES ('787', 'aikang', '51', '3');
INSERT INTO `aikang_menu_role` VALUES ('788', 'aikang', '61', '3');
INSERT INTO `aikang_menu_role` VALUES ('789', 'aikang', '64', '3');
INSERT INTO `aikang_menu_role` VALUES ('790', 'aikang', '66', '3');
INSERT INTO `aikang_menu_role` VALUES ('791', 'aikang', '59', '3');
INSERT INTO `aikang_menu_role` VALUES ('792', 'aikang', '63', '3');
INSERT INTO `aikang_menu_role` VALUES ('793', 'aikang', '72', '3');
INSERT INTO `aikang_menu_role` VALUES ('794', 'aikang', '73', '3');
INSERT INTO `aikang_menu_role` VALUES ('795', 'aikang', '74', '3');
INSERT INTO `aikang_menu_role` VALUES ('796', 'aikang', '40', '3');
INSERT INTO `aikang_menu_role` VALUES ('797', 'aikang', '81', '3');
INSERT INTO `aikang_menu_role` VALUES ('798', 'aikang', '79', '3');
INSERT INTO `aikang_menu_role` VALUES ('799', 'aikang', '80', '3');
INSERT INTO `aikang_menu_role` VALUES ('800', 'aikang', '85', '3');
INSERT INTO `aikang_menu_role` VALUES ('801', 'aikang', '86', '3');
INSERT INTO `aikang_menu_role` VALUES ('802', 'aikang', '87', '3');
INSERT INTO `aikang_menu_role` VALUES ('803', 'aikang', '88', '3');
INSERT INTO `aikang_menu_role` VALUES ('804', 'aikang', '82', '3');
INSERT INTO `aikang_menu_role` VALUES ('805', 'aikang', '90', '3');
INSERT INTO `aikang_menu_role` VALUES ('806', 'aikang', '91', '3');
INSERT INTO `aikang_menu_role` VALUES ('807', 'aikang', '92', '3');
INSERT INTO `aikang_menu_role` VALUES ('819', 'aikang', '43', '4');
INSERT INTO `aikang_menu_role` VALUES ('820', 'aikang', '66', '4');
INSERT INTO `aikang_menu_role` VALUES ('821', 'aikang', '72', '4');
INSERT INTO `aikang_menu_role` VALUES ('822', 'aikang', '73', '4');
INSERT INTO `aikang_menu_role` VALUES ('823', 'aikang', '79', '4');
INSERT INTO `aikang_menu_role` VALUES ('824', 'aikang', '81', '4');
INSERT INTO `aikang_menu_role` VALUES ('825', 'aikang', '82', '4');
INSERT INTO `aikang_menu_role` VALUES ('826', 'aikang', '85', '4');
INSERT INTO `aikang_menu_role` VALUES ('827', 'aikang', '86', '4');
INSERT INTO `aikang_menu_role` VALUES ('828', 'aikang', '90', '4');
INSERT INTO `aikang_menu_role` VALUES ('829', 'aikang', '91', '4');
INSERT INTO `aikang_menu_role` VALUES ('830', 'aikang', '92', '4');

-- ----------------------------
-- Table structure for `aikang_picture`
-- ----------------------------
DROP TABLE IF EXISTS `aikang_picture`;
CREATE TABLE `aikang_picture` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `seriid` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `company` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `filename` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `filenamemin` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `createdate` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `remark` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=115 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of aikang_picture
-- ----------------------------
INSERT INTO `aikang_picture` VALUES ('95', '1611652706796303KknDwp', 'aikang', 'picu_1611652706796828S8QW.jpeg', 'picu_1611652706796828S8QW_min.jpeg', '2021-01-26 17:18:26', '');
INSERT INTO `aikang_picture` VALUES ('96', '1611652713241303nw29xi', 'aikang', 'picu_16116527132418283kw7.jpeg', 'picu_16116527132418283kw7_min.jpeg', '2021-01-26 17:18:33', '');
INSERT INTO `aikang_picture` VALUES ('97', '16116527194443031AhBCx', 'aikang', 'picu_16116527194448283kKF.jpeg', 'picu_16116527194448283kKF_min.jpeg', '2021-01-26 17:18:39', '');
INSERT INTO `aikang_picture` VALUES ('98', '1611652725617303yDwjZR', 'aikang', 'picu_1611652725617828biTX.jpeg', 'picu_1611652725617828biTX_min.jpeg', '2021-01-26 17:18:45', '');
INSERT INTO `aikang_picture` VALUES ('99', '16116527319973030FxGQy', 'aikang', 'picu_1611652731997828mct3.jpeg', 'picu_1611652731997828mct3_min.jpeg', '2021-01-26 17:18:51', '');
INSERT INTO `aikang_picture` VALUES ('100', '1611652738360303BDhcGe', 'aikang', 'picu_1611652738360828A3k2.jpeg', 'picu_1611652738360828A3k2_min.jpeg', '2021-01-26 17:18:58', '');
INSERT INTO `aikang_picture` VALUES ('101', '1611652746667303RM4den', 'aikang', 'picu_1611652746667828eEh4.jpeg', 'picu_1611652746667828eEh4_min.jpeg', '2021-01-26 17:19:06', '');
INSERT INTO `aikang_picture` VALUES ('102', '1611652755056303jsHNTt', 'aikang', 'picu_1611652755056828NTPW.jpeg', 'picu_1611652755056828NTPW_min.jpeg', '2021-01-26 17:19:15', '');
INSERT INTO `aikang_picture` VALUES ('103', '1611652761852303tKF0E7', 'aikang', 'picu_16116527618528283yQW.jpeg', 'picu_16116527618528283yQW_min.jpeg', '2021-01-26 17:19:21', '');
INSERT INTO `aikang_picture` VALUES ('104', '1611652767688303nWzz8j', 'aikang', 'picu_1611652767688828Kfmt.jpeg', 'picu_1611652767688828Kfmt_min.jpeg', '2021-01-26 17:19:27', '');
INSERT INTO `aikang_picture` VALUES ('105', '1611652773709303m5SG86', 'aikang', 'picu_1611652773709828cGBh.jpeg', 'picu_1611652773709828cGBh_min.jpeg', '2021-01-26 17:19:33', '');
INSERT INTO `aikang_picture` VALUES ('106', '1611652780041303j9BSZY', 'aikang', 'picu_1611652780041828ctsD.jpeg', 'picu_1611652780041828ctsD_min.jpeg', '2021-01-26 17:19:40', '');
INSERT INTO `aikang_picture` VALUES ('107', '1611652787062303X0T3Qi', 'aikang', 'picu_1611652787062828RiBC.jpeg', 'picu_1611652787062828RiBC_min.jpeg', '2021-01-26 17:19:47', '');
INSERT INTO `aikang_picture` VALUES ('108', '1611652795664303JNNEsJ', 'aikang', 'picu_1611652795664828sii4.jpeg', 'picu_1611652795664828sii4_min.jpeg', '2021-01-26 17:19:55', '');
INSERT INTO `aikang_picture` VALUES ('109', '1611652804493303eTkGAK', 'aikang', 'picu_1611652804493828z1Sw.jpeg', 'picu_1611652804493828z1Sw_min.jpeg', '2021-01-26 17:20:04', '');
INSERT INTO `aikang_picture` VALUES ('110', '1611652810663303pDms1b', 'aikang', 'picu_1611652810663828jkQi.jpeg', 'picu_1611652810663828jkQi_min.jpeg', '2021-01-26 17:20:10', '');
INSERT INTO `aikang_picture` VALUES ('111', '1611652817949303Eb7y3K', 'aikang', 'picu_1611652817949828snck.jpeg', 'picu_1611652817949828snck_min.jpeg', '2021-01-26 17:20:17', '');
INSERT INTO `aikang_picture` VALUES ('112', '1611652826560303Xfhi3Q', 'aikang', 'picu_1611652826560828ES0f.jpeg', 'picu_1611652826560828ES0f_min.jpeg', '2021-01-26 17:20:26', '');
INSERT INTO `aikang_picture` VALUES ('113', '1611652836585303daW6z6', 'aikang', 'picu_1611652836585828JhfP.jpeg', 'picu_1611652836585828JhfP_min.jpeg', '2021-01-26 17:20:36', '');
INSERT INTO `aikang_picture` VALUES ('114', '161165284313130381MkR7', 'aikang', 'picu_1611652843131828swtm.jpeg', 'picu_1611652843131828swtm_min.jpeg', '2021-01-26 17:20:43', '');

-- ----------------------------
-- Table structure for `aikang_pricetype`
-- ----------------------------
DROP TABLE IF EXISTS `aikang_pricetype`;
CREATE TABLE `aikang_pricetype` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `company` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `sid` bigint DEFAULT '0',
  `sname` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `tpname` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `price` double DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of aikang_pricetype
-- ----------------------------
INSERT INTO `aikang_pricetype` VALUES ('23', 'aikang', '3', '中医推拿', '美团', '86');
INSERT INTO `aikang_pricetype` VALUES ('24', 'aikang', '4', '中药沐足', '美团', '86');
INSERT INTO `aikang_pricetype` VALUES ('25', 'aikang', '7', '艾草沐足', '美团', '86');
INSERT INTO `aikang_pricetype` VALUES ('26', 'aikang', '8', '老姜足疗', '美团', '86');

-- ----------------------------
-- Table structure for `aikang_room`
-- ----------------------------
DROP TABLE IF EXISTS `aikang_room`;
CREATE TABLE `aikang_room` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `company` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `name` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `price` double DEFAULT '0',
  `num` int DEFAULT NULL,
  `type` int DEFAULT NULL,
  `enabled` int DEFAULT '1',
  `mark` varchar(256) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of aikang_room
-- ----------------------------
INSERT INTO `aikang_room` VALUES ('1', 'aikang', '20001', '11', '4', '0', '1', '沙发2 床 2');
INSERT INTO `aikang_room` VALUES ('2', 'aikang', '202', '15', '1', '0', '1', '5个沙发');
INSERT INTO `aikang_room` VALUES ('3', 'aikang', '205', '20', '2', '0', '1', '5个沙发');
INSERT INTO `aikang_room` VALUES ('4', 'aikang', '206', '0', '2', '0', '1', '5个沙发');
INSERT INTO `aikang_room` VALUES ('5', 'aikang', '207', '0', '2', '0', '1', '5个沙发');
INSERT INTO `aikang_room` VALUES ('6', 'aikang', '210', '0', '3', '2', '1', '');
INSERT INTO `aikang_room` VALUES ('7', 'aikang', '211', '0', '1', '0', '0', '211');
INSERT INTO `aikang_room` VALUES ('8', 'aikang', '212', '0', '1', '0', '0', '212');
INSERT INTO `aikang_room` VALUES ('9', 'aikang', '213', '0', '6', '0', '0', '213');
INSERT INTO `aikang_room` VALUES ('10', 'aikang', '215', '0', '1', '0', '0', '215');
INSERT INTO `aikang_room` VALUES ('11', 'aikang', '216', '0', '15', '0', '0', '216');
INSERT INTO `aikang_room` VALUES ('12', 'aikang', '217', '0', '1', '0', '0', '217');
INSERT INTO `aikang_room` VALUES ('13', 'aikang', '218', '0', '1', '0', '0', '218');
INSERT INTO `aikang_room` VALUES ('14', 'aikang', '219', '0', '1', '0', '0', '219');
INSERT INTO `aikang_room` VALUES ('15', 'aikang', '220', '0', '1', '0', '1', '220');
INSERT INTO `aikang_room` VALUES ('16', 'aikang', '312', '0', '1', '0', '1', '');
INSERT INTO `aikang_room` VALUES ('17', 'aikang', '313', '0', '1', '0', '1', '');
INSERT INTO `aikang_room` VALUES ('18', 'aikang', '318', '0', '10', '0', '1', '');
INSERT INTO `aikang_room` VALUES ('19', 'aikang', '201', '0', '1', '0', '1', '');

-- ----------------------------
-- Table structure for `aikang_roundsconfig`
-- ----------------------------
DROP TABLE IF EXISTS `aikang_roundsconfig`;
CREATE TABLE `aikang_roundsconfig` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `company` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `paizhong_type` int DEFAULT '0',
  `dongpai_type` int DEFAULT '0',
  `zhipai_type` int DEFAULT '0',
  `dianzhong_budongpai` int DEFAULT '0',
  `yuezhong_buguopai` int DEFAULT '0',
  `fujia_shoudong` int DEFAULT '0',
  `yuezhong_tiqian` int DEFAULT '0',
  `yuezhong_buzhipai` int DEFAULT '0',
  `jiaozhong_dengdai` int DEFAULT '0',
  `jieshu_type` int DEFAULT '0',
  `noMoveSalarySum` double DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of aikang_roundsconfig
-- ----------------------------
INSERT INTO `aikang_roundsconfig` VALUES ('5', 'aikang', '0', '0', '0', '0', '1', '1', '30', '20', '5', '0', '30');

-- ----------------------------
-- Table structure for `aikang_serviceitem`
-- ----------------------------
DROP TABLE IF EXISTS `aikang_serviceitem`;
CREATE TABLE `aikang_serviceitem` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT 'serviceid',
  `company` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `timelong` int unsigned NOT NULL DEFAULT '1' COMMENT '时长',
  `priveType` int unsigned NOT NULL DEFAULT '0' COMMENT '价格类型',
  `price` double unsigned NOT NULL DEFAULT '0' COMMENT '格价',
  `overtime` int unsigned DEFAULT '0',
  `dSalaryLz` double DEFAULT '0' COMMENT '默认轮种提成',
  `dSalaryDz` double DEFAULT '0' COMMENT '默认点钟提成',
  `dSalaryDp` double DEFAULT '0' COMMENT '默认点排提成',
  `dSalarySz` double DEFAULT '0' COMMENT '默认散钟提成',
  `clocknum` double unsigned DEFAULT '1',
  `needpoint` int unsigned DEFAULT '0',
  `name` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'No_name',
  `headpic` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `mark` varchar(256) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `enabled` int NOT NULL DEFAULT '0',
  `isdiscount` int DEFAULT '0',
  `timepermit` int DEFAULT '0',
  `pointChange` int DEFAULT '0' COMMENT '可否积分兑换',
  `isspecialwork` int DEFAULT '0',
  `noshowinshop` int DEFAULT '0',
  `sp1` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `sp2` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `sp3` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of aikang_serviceitem
-- ----------------------------
INSERT INTO `aikang_serviceitem` VALUES ('1', 'aikang', '60', '0', '126', '11', '45', '50', '45', '45', '1', '100', '中医理疗', 'picu_1611652731997828mct3.jpeg', '按摩 神灯 药酒 所发生的发顺丰阿斯顿发斯蒂芬', '1', '1', '0', '1', '0', '0', null, null, null);
INSERT INTO `aikang_serviceitem` VALUES ('2', 'aikang', '25', '0', '50', '10', '28', '30', '28', '28', '0.5', '1', '采耳', 'picu_1610268988788828fZf3.jpeg', '皇家采耳', '0', '1', '0', '0', '1', '0', null, null, null);
INSERT INTO `aikang_serviceitem` VALUES ('3', 'aikang', '60', '0', '88', '11', '32', '34', '32', '32', '1', '100', '中医推拿', 'picu_1611652706796828S8QW.jpeg', '背部按摩', '1', '1', '0', '0', '0', '0', null, null, null);
INSERT INTO `aikang_serviceitem` VALUES ('4', 'aikang', '60', '0', '88', '11', '34', '36', '34', '34', '1', '100', '中药沐足', 'picu_1611652826560828ES0f.jpeg', '古法沐足一根筋', '1', '1', '0', '0', '0', '0', null, null, null);
INSERT INTO `aikang_serviceitem` VALUES ('5', 'aikang', '15', '0', '35', '10', '15', '15', '15', '15', '0.5', '1', '拔罐', 'picu_1611652804493828z1Sw.jpeg', '火罐', '1', '1', '0', '0', '1', '0', null, null, null);
INSERT INTO `aikang_serviceitem` VALUES ('6', 'aikang', '25', '0', '50', '10', '22', '25', '22', '22', '0.75', '1', '刮痧', 'picu_1611652810663828jkQi.jpeg', '刮痧', '1', '1', '0', '0', '0', '0', null, null, null);
INSERT INTO `aikang_serviceitem` VALUES ('7', 'aikang', '60', '0', '88', '11', '35', '37', '35', '35', '1', '1', '艾草沐足', 'picu_16116527132418283kw7.jpeg', '艾草足疗', '1', '1', '0', '0', '0', '0', null, null, null);
INSERT INTO `aikang_serviceitem` VALUES ('8', 'aikang', '60', '0', '88', '11', '35', '35', '35', '35', '1', '1', '老姜足疗', 'picu_16116527194448283kKF.jpeg', '老姜足疗', '1', '1', '0', '0', '0', '0', null, null, null);
INSERT INTO `aikang_serviceitem` VALUES ('9', 'aikang', '21', '0', '68', '6', '20', '23', '20', '20', '1', '100', '砭石灸', 'picu_1611652795664828sii4.jpeg', '砭石灸刮痧', '1', '1', '0', '0', '1', '0', null, null, null);
INSERT INTO `aikang_serviceitem` VALUES ('10', 'aikang', '60', '0', '158', '12', '38', '40', '38', '38', '1', '200', '聚阳箱灸', 'picu_1611652767688828Kfmt.jpeg', '一个大箱子，扣在身上，里面燃放艾条！', '1', '1', '0', '0', '0', '0', null, null, null);
INSERT INTO `aikang_serviceitem` VALUES ('11', 'aikang', '20', '0', '50', '10', '28', '28', '28', '28', '0.75', '1', '修脚', 'picu_1611652836585828JhfP.jpeg', '修脚皮或者指甲', '1', '1', '0', '0', '1', '0', null, null, null);
INSERT INTO `aikang_serviceitem` VALUES ('12', 'aikang', '30', '0', '38', '10', '15', '15', '15', '15', '0.5', '30', '坐灸', 'picu_1610268766421828eMm3.jpeg', '坐灸 屁股灸', '1', '1', '0', '0', '1', '0', null, null, null);
INSERT INTO `aikang_serviceitem` VALUES ('15', 'aikang', '60', '0', '128', '11', '45', '50', '45', '45', '1', '1', '精油推拿60分钟', 'picu_1611652787062828RiBC.jpeg', '精油推拿60分钟', '1', '1', '0', '0', '0', '0', null, null, null);
INSERT INTO `aikang_serviceitem` VALUES ('16', 'aikang', '90', '0', '268', '15', '88', '98', '88', '88', '1.5', '1680', '脾胃调理三效合一', 'picu_1611652780041828ctsD.jpeg', '脾胃调理三效合一', '1', '1', '0', '0', '0', '0', null, null, null);
INSERT INTO `aikang_serviceitem` VALUES ('17', 'aikang', '0', '0', '15', '0', '0', '0', '0', '0', '0', '75', '衣服', null, '一次性衣服', '1', '1', '0', '0', '1', '1', null, null, null);
INSERT INTO `aikang_serviceitem` VALUES ('18', 'aikang', '0', '0', '5', '0', '0', '0', '0', '0', '0', '25', '裤子', null, '裤子', '1', '1', '0', '0', '1', '1', null, null, null);
INSERT INTO `aikang_serviceitem` VALUES ('19', 'aikang', '5', '0', '0', '1', '3', '3', '3', '3', '0.01', '1', '加班补助', null, '加班补助', '1', '1', '0', '0', '0', '1', null, null, null);
INSERT INTO `aikang_serviceitem` VALUES ('20', 'aikang', '60', '0', '98', '10', '36', '40', '36', '36', '1', '1', '悬灸', 'picu_1610268766421828eMm3.jpeg', '悬灸', '1', '1', '0', '0', '0', '0', null, null, null);
INSERT INTO `aikang_serviceitem` VALUES ('21', 'aikang', '10', '1', '28', '5', '12', '12', '12', '12', '0.3', '150', '搓盐', null, '牛奶盐搓脚', '1', '1', '0', '0', '0', '1', null, null, null);

-- ----------------------------
-- Table structure for `aikang_serviceitemsort`
-- ----------------------------
DROP TABLE IF EXISTS `aikang_serviceitemsort`;
CREATE TABLE `aikang_serviceitemsort` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `company` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `sid` int DEFAULT NULL,
  `sdx` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=209 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of aikang_serviceitemsort
-- ----------------------------
INSERT INTO `aikang_serviceitemsort` VALUES ('190', 'aikang', '3', '0');
INSERT INTO `aikang_serviceitemsort` VALUES ('191', 'aikang', '1', '1');
INSERT INTO `aikang_serviceitemsort` VALUES ('192', 'aikang', '4', '2');
INSERT INTO `aikang_serviceitemsort` VALUES ('193', 'aikang', '7', '3');
INSERT INTO `aikang_serviceitemsort` VALUES ('194', 'aikang', '8', '4');
INSERT INTO `aikang_serviceitemsort` VALUES ('195', 'aikang', '15', '5');
INSERT INTO `aikang_serviceitemsort` VALUES ('196', 'aikang', '16', '6');
INSERT INTO `aikang_serviceitemsort` VALUES ('197', 'aikang', '6', '7');
INSERT INTO `aikang_serviceitemsort` VALUES ('198', 'aikang', '5', '8');
INSERT INTO `aikang_serviceitemsort` VALUES ('199', 'aikang', '17', '9');
INSERT INTO `aikang_serviceitemsort` VALUES ('200', 'aikang', '18', '10');
INSERT INTO `aikang_serviceitemsort` VALUES ('201', 'aikang', '10', '11');
INSERT INTO `aikang_serviceitemsort` VALUES ('202', 'aikang', '20', '12');
INSERT INTO `aikang_serviceitemsort` VALUES ('203', 'aikang', '19', '13');
INSERT INTO `aikang_serviceitemsort` VALUES ('204', 'aikang', '9', '14');
INSERT INTO `aikang_serviceitemsort` VALUES ('205', 'aikang', '12', '15');
INSERT INTO `aikang_serviceitemsort` VALUES ('206', 'aikang', '2', '16');
INSERT INTO `aikang_serviceitemsort` VALUES ('207', 'aikang', '11', '17');
INSERT INTO `aikang_serviceitemsort` VALUES ('208', 'aikang', '21', '18');

-- ----------------------------
-- Table structure for `aikang_servicesalary`
-- ----------------------------
DROP TABLE IF EXISTS `aikang_servicesalary`;
CREATE TABLE `aikang_servicesalary` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `company` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `hid` bigint unsigned DEFAULT NULL,
  `sid` int unsigned DEFAULT NULL,
  `defsalarylz` double DEFAULT '0' COMMENT '种轮提成',
  `defsalarydz` double DEFAULT '0' COMMENT '钟点提成',
  `defsalarydp` double DEFAULT '0' COMMENT '点排提成',
  `defsalarysz` double DEFAULT '0' COMMENT '散钟提成',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=332 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of aikang_servicesalary
-- ----------------------------
INSERT INTO `aikang_servicesalary` VALUES ('109', 'aikang', '51', '3', '0', '1', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('110', 'aikang', '51', '1', '0', '1', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('111', 'aikang', '51', '4', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('112', 'aikang', '51', '7', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('113', 'aikang', '51', '8', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('114', 'aikang', '51', '5', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('115', 'aikang', '51', '6', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('116', 'aikang', '51', '10', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('117', 'aikang', '51', '9', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('118', 'aikang', '51', '2', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('119', 'aikang', '51', '12', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('120', 'aikang', '51', '11', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('121', 'aikang', '44', '3', '0', '1', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('122', 'aikang', '44', '1', '0', '1', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('123', 'aikang', '44', '4', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('124', 'aikang', '44', '7', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('125', 'aikang', '44', '8', '0', '1.5', '0.5', '0.5');
INSERT INTO `aikang_servicesalary` VALUES ('126', 'aikang', '44', '5', '0', '1', '0.5', '0');
INSERT INTO `aikang_servicesalary` VALUES ('127', 'aikang', '44', '6', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('128', 'aikang', '44', '10', '0', '0.5', '0', '0.5');
INSERT INTO `aikang_servicesalary` VALUES ('129', 'aikang', '44', '9', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('130', 'aikang', '44', '2', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('131', 'aikang', '44', '12', '-1', '0.5', '-1', '0');
INSERT INTO `aikang_servicesalary` VALUES ('132', 'aikang', '44', '11', '0', '0', '0.5', '0');
INSERT INTO `aikang_servicesalary` VALUES ('157', 'aikang', '55', '3', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('158', 'aikang', '55', '1', '1', '1', '1', '1');
INSERT INTO `aikang_servicesalary` VALUES ('159', 'aikang', '55', '4', '1', '3', '1', '1');
INSERT INTO `aikang_servicesalary` VALUES ('160', 'aikang', '55', '7', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('161', 'aikang', '55', '8', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('162', 'aikang', '55', '5', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('163', 'aikang', '55', '6', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('164', 'aikang', '55', '10', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('165', 'aikang', '55', '9', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('166', 'aikang', '55', '2', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('167', 'aikang', '55', '12', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('168', 'aikang', '55', '11', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('169', 'aikang', '54', '3', '1', '1', '1', '1');
INSERT INTO `aikang_servicesalary` VALUES ('170', 'aikang', '54', '1', '1', '1', '1', '1');
INSERT INTO `aikang_servicesalary` VALUES ('171', 'aikang', '54', '4', '1', '1', '1', '1');
INSERT INTO `aikang_servicesalary` VALUES ('172', 'aikang', '54', '7', '-1', '-1', '0.5', '0');
INSERT INTO `aikang_servicesalary` VALUES ('173', 'aikang', '54', '8', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('174', 'aikang', '54', '5', '0', '-0.5', '0', '-0.5');
INSERT INTO `aikang_servicesalary` VALUES ('175', 'aikang', '54', '6', '0', '0', '0.5', '0.5');
INSERT INTO `aikang_servicesalary` VALUES ('176', 'aikang', '54', '10', '0', '-0.5', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('177', 'aikang', '54', '9', '0', '0', '-0.5', '-0.5');
INSERT INTO `aikang_servicesalary` VALUES ('178', 'aikang', '54', '2', '0', '0.5', '0.5', '0');
INSERT INTO `aikang_servicesalary` VALUES ('179', 'aikang', '54', '12', '0', '0', '0.5', '0.5');
INSERT INTO `aikang_servicesalary` VALUES ('180', 'aikang', '54', '11', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('193', 'aikang', '50', '3', '0', '1', '1', '0');
INSERT INTO `aikang_servicesalary` VALUES ('194', 'aikang', '50', '1', '0', '1', '1', '0');
INSERT INTO `aikang_servicesalary` VALUES ('195', 'aikang', '50', '4', '0', '1', '0', '1');
INSERT INTO `aikang_servicesalary` VALUES ('196', 'aikang', '50', '7', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('197', 'aikang', '50', '8', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('198', 'aikang', '50', '5', '1', '-1', '1', '0');
INSERT INTO `aikang_servicesalary` VALUES ('199', 'aikang', '50', '6', '0', '0', '1', '0');
INSERT INTO `aikang_servicesalary` VALUES ('200', 'aikang', '50', '10', '0', '-1', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('201', 'aikang', '50', '9', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('202', 'aikang', '50', '2', '0', '0', '1', '0');
INSERT INTO `aikang_servicesalary` VALUES ('203', 'aikang', '50', '12', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('204', 'aikang', '50', '11', '0', '0', '-1', '0');
INSERT INTO `aikang_servicesalary` VALUES ('205', 'aikang', '56', '3', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('206', 'aikang', '56', '1', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('207', 'aikang', '56', '4', '0', '0', '1', '0');
INSERT INTO `aikang_servicesalary` VALUES ('208', 'aikang', '56', '7', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('209', 'aikang', '56', '8', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('210', 'aikang', '56', '5', '1', '1', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('211', 'aikang', '56', '6', '1', '1', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('212', 'aikang', '56', '10', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('213', 'aikang', '56', '9', '1', '1', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('214', 'aikang', '56', '2', '-1', '-1', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('215', 'aikang', '56', '12', '-1', '-1', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('216', 'aikang', '56', '11', '1', '1', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('253', 'aikang', '43', '3', '3', '3', '3', '3');
INSERT INTO `aikang_servicesalary` VALUES ('254', 'aikang', '43', '1', '3', '3', '3', '3');
INSERT INTO `aikang_servicesalary` VALUES ('255', 'aikang', '43', '4', '3', '3', '3', '3');
INSERT INTO `aikang_servicesalary` VALUES ('256', 'aikang', '43', '7', '3', '3', '3', '3');
INSERT INTO `aikang_servicesalary` VALUES ('257', 'aikang', '43', '8', '3', '3', '3', '3');
INSERT INTO `aikang_servicesalary` VALUES ('258', 'aikang', '43', '5', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('259', 'aikang', '43', '6', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('260', 'aikang', '43', '10', '0', '0', '0', '1');
INSERT INTO `aikang_servicesalary` VALUES ('261', 'aikang', '43', '9', '1', '0', '1', '1');
INSERT INTO `aikang_servicesalary` VALUES ('262', 'aikang', '43', '2', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('263', 'aikang', '43', '12', '0', '0', '1', '1');
INSERT INTO `aikang_servicesalary` VALUES ('264', 'aikang', '43', '11', '0', '1', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('277', 'aikang', '53', '3', '0', '3', '2', '0');
INSERT INTO `aikang_servicesalary` VALUES ('278', 'aikang', '53', '1', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('279', 'aikang', '53', '4', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('280', 'aikang', '53', '7', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('281', 'aikang', '53', '8', '1.5', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('282', 'aikang', '53', '5', '0', '1', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('283', 'aikang', '53', '6', '0', '1', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('284', 'aikang', '53', '10', '0', '1', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('285', 'aikang', '53', '9', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('286', 'aikang', '53', '2', '0', '0', '-1', '0');
INSERT INTO `aikang_servicesalary` VALUES ('287', 'aikang', '53', '12', '-1', '-1', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('288', 'aikang', '53', '11', '-1', '-1', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('289', 'aikang', '47', '3', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('290', 'aikang', '47', '1', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('291', 'aikang', '47', '4', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('292', 'aikang', '47', '7', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('293', 'aikang', '47', '8', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('294', 'aikang', '47', '5', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('295', 'aikang', '47', '6', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('296', 'aikang', '47', '10', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('297', 'aikang', '47', '9', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('298', 'aikang', '47', '2', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('299', 'aikang', '47', '12', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('300', 'aikang', '47', '11', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('301', 'aikang', '46', '3', '1', '1', '1', '1');
INSERT INTO `aikang_servicesalary` VALUES ('302', 'aikang', '46', '1', '1', '1', '1', '1');
INSERT INTO `aikang_servicesalary` VALUES ('303', 'aikang', '46', '4', '1', '1', '1', '1');
INSERT INTO `aikang_servicesalary` VALUES ('304', 'aikang', '46', '7', '1', '1', '1', '1');
INSERT INTO `aikang_servicesalary` VALUES ('305', 'aikang', '46', '8', '1', '1', '1', '1');
INSERT INTO `aikang_servicesalary` VALUES ('306', 'aikang', '46', '5', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('307', 'aikang', '46', '6', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('308', 'aikang', '46', '10', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('309', 'aikang', '46', '9', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('310', 'aikang', '46', '2', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('311', 'aikang', '46', '12', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('312', 'aikang', '46', '11', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('313', 'aikang', '45', '3', '2', '2', '2', '2');
INSERT INTO `aikang_servicesalary` VALUES ('314', 'aikang', '45', '1', '2', '2', '2', '2');
INSERT INTO `aikang_servicesalary` VALUES ('315', 'aikang', '45', '4', '2', '2', '2', '2');
INSERT INTO `aikang_servicesalary` VALUES ('316', 'aikang', '45', '7', '2', '2', '2', '2');
INSERT INTO `aikang_servicesalary` VALUES ('317', 'aikang', '45', '8', '2', '2', '2', '2');
INSERT INTO `aikang_servicesalary` VALUES ('318', 'aikang', '45', '15', '2', '2', '2', '2');
INSERT INTO `aikang_servicesalary` VALUES ('319', 'aikang', '45', '16', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('320', 'aikang', '45', '6', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('321', 'aikang', '45', '5', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('322', 'aikang', '45', '17', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('323', 'aikang', '45', '18', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('324', 'aikang', '45', '10', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('325', 'aikang', '45', '20', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('326', 'aikang', '45', '19', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('327', 'aikang', '45', '9', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('328', 'aikang', '45', '12', '0', '1', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('329', 'aikang', '45', '2', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('330', 'aikang', '45', '11', '0', '0', '0', '0');
INSERT INTO `aikang_servicesalary` VALUES ('331', 'aikang', '45', '21', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for `aikang_spetimesec`
-- ----------------------------
DROP TABLE IF EXISTS `aikang_spetimesec`;
CREATE TABLE `aikang_spetimesec` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `company` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `type` int DEFAULT '0',
  `name` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `start` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `end` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `mark` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `reset` int DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of aikang_spetimesec
-- ----------------------------
INSERT INTO `aikang_spetimesec` VALUES ('4', 'aikang', '0', '早加班', '2000-01-01 08:05:00', '2000-01-01 12:00:00', '早上加班', '0');
INSERT INTO `aikang_spetimesec` VALUES ('6', 'aikang', '0', '晚加班', '2000-01-01 23:30:00', '2000-01-02 02:30:00', '', '0');

-- ----------------------------
-- Table structure for `aikang_waiteritem`
-- ----------------------------
DROP TABLE IF EXISTS `aikang_waiteritem`;
CREATE TABLE `aikang_waiteritem` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `company` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `ordertype` int DEFAULT '0',
  `gukenum` int DEFAULT '0',
  `gukeidx` int DEFAULT '0',
  `billnumber` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `serinumber` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `rmid` bigint DEFAULT NULL COMMENT '房间id',
  `rmname` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '' COMMENT '房间名称',
  `wtype` int DEFAULT '0' COMMENT '排钟方式',
  `wtypek` int DEFAULT '0',
  `wlev` int DEFAULT '0',
  `dayid` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '' COMMENT '日单号',
  `daynum` int DEFAULT '0',
  `sid` bigint DEFAULT '0' COMMENT '服务项目ID',
  `sname` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '' COMMENT '服务项目名称',
  `salarylz` double DEFAULT '0',
  `stimelong` int DEFAULT '0',
  `hid` bigint DEFAULT '0' COMMENT '技师ID',
  `hcode` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '' COMMENT '技师拍钟号',
  `hname` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '' COMMENT '技师名称',
  `movsdx` int DEFAULT '0' COMMENT '单开预动牌索引',
  `changenum` int DEFAULT '0',
  `changelist` varchar(256) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `workstate` int DEFAULT '0',
  `maketime` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '2000-01-01 00:00:00',
  `waittime` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '2000-01-01 00:00:00',
  `worktime` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '2000-01-01 00:00:00',
  `breakstart` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '2000-01-01 00:00:00',
  `breaklong` int DEFAULT '0',
  `finishtime` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '2000-01-01 00:00:00',
  `finishtimeyj` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `kid` bigint unsigned DEFAULT '0',
  `kname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '' COMMENT '顾客姓名',
  `hyid` bigint DEFAULT '0',
  `hyname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `hyseriid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `hyrmoney` double DEFAULT '0',
  `paystate` int DEFAULT '0' COMMENT '支付状态',
  `paynum` int DEFAULT '0' COMMENT '支付数值',
  `payid` bigint DEFAULT '0',
  `checkcode` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `remark` varchar(256) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `clocknum` double DEFAULT '0',
  `itembillo` double DEFAULT '0',
  `itembill` double DEFAULT '0',
  `pricetype` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `clocknumyf` double DEFAULT '0',
  `itembillyf` double DEFAULT '0',
  `pricetypeyf` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `clocknumyy` double DEFAULT '0',
  `upfree` int DEFAULT '0' COMMENT '无实际用途，更新语法时候不至于为空',
  `islast` int DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=796 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of aikang_waiteritem
-- ----------------------------
INSERT INTO `aikang_waiteritem` VALUES ('795', 'aikang', '0', '0', '0', '686816113141152061', '1611314115206000iihQdrb4W', '1', '20001', '0', '0', '0', '202101221', '20210122', '3', '中医推拿', '0', '60', '48', '7', '刘振霞', '24', '0', '', '500', '2021-01-22 19:15:15', '2021-01-22 19:18:13', '2021-01-22 20:11:49', '', '0', '', '2021-01-22 21:11:49', '0', '', '0', '', '', '0', '0', '0', '0', '12982412', '', '0', '0', '0', '原价', '1', '0', '', '1', '1', '1');

-- ----------------------------
-- Table structure for `aikang_waiteritem_rec`
-- ----------------------------
DROP TABLE IF EXISTS `aikang_waiteritem_rec`;
CREATE TABLE `aikang_waiteritem_rec` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `company` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `ordertype` int DEFAULT '0',
  `gukenum` int DEFAULT '0',
  `gukeidx` int DEFAULT '0',
  `billnumber` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `serinumber` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `rmid` bigint DEFAULT NULL COMMENT '房间id',
  `rmname` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '' COMMENT '房间名称',
  `wtype` int DEFAULT '0' COMMENT '排钟方式',
  `wtypek` int DEFAULT '0',
  `wlev` int DEFAULT '0',
  `dayid` int DEFAULT '0' COMMENT '日单号',
  `daynum` int DEFAULT '0',
  `sid` bigint DEFAULT '0' COMMENT '服务项目ID',
  `sname` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '' COMMENT '服务项目名称',
  `salarylz` double DEFAULT '0',
  `stimelong` int DEFAULT '0',
  `hid` bigint DEFAULT '0' COMMENT '技师ID',
  `hcode` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '' COMMENT '技师拍钟号',
  `hname` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '' COMMENT '技师名称',
  `movsdx` int DEFAULT '0' COMMENT '单开预动牌索引',
  `changenum` int DEFAULT '0',
  `changelist` varchar(256) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `workstate` int DEFAULT '0',
  `maketime` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '2000-01-01 00:00:00',
  `waittime` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '2000-01-01 00:00:00',
  `worktime` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '2000-01-01 00:00:00',
  `breakstart` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '2000-01-01 00:00:00',
  `breaklong` int DEFAULT '0',
  `finishtime` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '2000-01-01 00:00:00',
  `finishtimeyj` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `kid` bigint unsigned DEFAULT '0',
  `kname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '' COMMENT '顾客姓名',
  `paystate` int DEFAULT '0' COMMENT '支付状态',
  `paynum` int DEFAULT '0' COMMENT '支付数值',
  `payid` bigint DEFAULT NULL,
  `checkcode` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `remark` varchar(256) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `clocknum` double DEFAULT '0',
  `itembill` double DEFAULT '0',
  `pricetype` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `clocknumyf` double DEFAULT '0',
  `itembillyf` double DEFAULT '0',
  `pricetypeyf` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `clocknumyy` double DEFAULT '0',
  `upfree` int DEFAULT '0' COMMENT '无实际用途，更新语法时候不至于为空',
  `islast` int DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=548 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of aikang_waiteritem_rec
-- ----------------------------
INSERT INTO `aikang_waiteritem_rec` VALUES ('545', 'aikang', '100', '2', '0', '6316055106133262', '1605492982817000Ga2eJr6F', '0', '', '0', '0', '0', '2', '20201116', '3', '中医推拿', '32', '60', '43', '22', '张伟', '17', '0', '', '300', '2020-11-16 15:10:13', '2020-11-16 11:16:56', '', '', '0', '', '', '63', '', '0', '0', '0', '34208420', '', '0', '0', '', '1', '88', '', '1', '1', '0');

-- ----------------------------
-- Table structure for `aikang_wbillitem`
-- ----------------------------
DROP TABLE IF EXISTS `aikang_wbillitem`;
CREATE TABLE `aikang_wbillitem` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `company` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `ordertype` int DEFAULT '0',
  `gukenum` int DEFAULT '1',
  `gukeidx` int DEFAULT '0',
  `billnumber` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `rmid` bigint DEFAULT NULL COMMENT '房间id',
  `rmname` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '' COMMENT '房间名称',
  `wtype` int DEFAULT '0' COMMENT '排钟方式',
  `dayid` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '' COMMENT '日单号',
  `daynum` int DEFAULT '0',
  `sid` bigint DEFAULT '0' COMMENT '服务项目ID',
  `sname` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '' COMMENT '服务项目名称',
  `hid` bigint DEFAULT '0' COMMENT '技师ID',
  `hcode` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '' COMMENT '技师拍钟号',
  `hname` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '' COMMENT '技师名称',
  `changenum` int DEFAULT '0',
  `changelist` varchar(256) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `workstate` int DEFAULT '0',
  `maketime` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `waittime` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `worktime` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `breakstart` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `breaklong` int DEFAULT '0',
  `finishtime` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `kid` bigint unsigned DEFAULT '0',
  `kname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '' COMMENT '顾客姓名',
  `paystate` int DEFAULT NULL COMMENT '支付状态',
  `paynum` int DEFAULT NULL COMMENT '支付数值',
  `payid` bigint DEFAULT NULL,
  `checkcode` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `remark` varchar(256) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `enabled` int DEFAULT '1',
  `worksalary` double DEFAULT '0',
  `clocknum` double DEFAULT '0',
  `clocknumzs` double DEFAULT '0',
  `itembill` double DEFAULT '0',
  `pricetype` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `hyid` bigint DEFAULT '0',
  `hyname` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `hyseriid` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `hyrmoney` double DEFAULT '0',
  `checkid` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `checkname` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `checkhcode` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `checktime` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=652 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of aikang_wbillitem
-- ----------------------------
INSERT INTO `aikang_wbillitem` VALUES ('197', 'aikang', '0', '1', '0', '', '1', '201', '0', '27', '0', '8', '老姜足疗', '53', '12', '江红', null, null, '2000', '2020-06-17 17:15:14', '2020-06-17 17:23:58', '2020-06-17 17:15:43', null, null, '2020-06-17 17:40:29', null, null, null, null, null, '71635974', null, null, '0', '0', '0', '0', '', '0', null, '', '0', '0', null, '', '');
INSERT INTO `aikang_wbillitem` VALUES ('198', 'aikang', '0', '1', '0', '', '1', '201', '0', '27', '0', '1', '中医理疗', '53', '12', '江红', null, null, '2000', '2020-06-17 17:15:14', '2020-06-17 17:38:58', '2020-06-17 17:40:30', null, null, '2020-06-17 17:59:33', null, null, null, null, null, '71635974', null, null, '0', '0', '0', '0', '', '0', null, '', '0', '0', null, '', '');
INSERT INTO `aikang_wbillitem` VALUES ('199', 'aikang', '0', '1', '0', '', '1', '201', '0', '27', '0', '5', '拔罐', '53', '12', '江红', null, null, '2000', '2020-06-17 17:15:14', '2020-06-17 17:53:58', '2020-06-17 18:00:00', null, null, '2020-06-17 18:19:01', null, null, null, null, null, '71635974', null, null, '0', '0', '0', '0', '', '0', null, '', '0', '0', null, '', '');
INSERT INTO `aikang_wbillitem` VALUES ('200', 'aikang', '0', '1', '0', '', '1', '201', '0', '27', '0', '6', '刮痧', '53', '12', '江红', null, null, '500', '2020-06-17 17:15:14', '2020-06-17 18:11:58', '2020-06-17 18:19:02', null, null, null, null, null, null, null, null, '71635974', null, null, '0', '0', '0', '0', '', '0', null, '', '0', '0', null, '', '');
INSERT INTO `aikang_wbillitem` VALUES ('201', 'aikang', '0', '1', '0', '', '1', '201', '0', '28', '0', '3', '中医推拿', '54', '15', '陆建峰', null, null, '11', '2020-06-17 18:20:06', '2020-06-17 19:22:50', null, null, null, null, null, null, null, null, null, '67258748', null, null, '0', '0', '0', '0', '', '0', null, '', '0', '0', null, '', '');
INSERT INTO `aikang_wbillitem` VALUES ('202', 'aikang', '0', '1', '0', '', '1', '201', '0', '28', '0', '7', '艾草沐足', '54', '15', '陆建峰', null, null, '11', '2020-06-17 18:20:06', '2020-06-17 19:37:50', null, null, null, null, null, null, null, null, null, '67258748', null, null, '0', '0', '0', '0', '', '0', null, '', '0', '0', null, '', '');
INSERT INTO `aikang_wbillitem` VALUES ('203', 'aikang', '0', '1', '0', '', '1', '201', '0', '28', '0', '6', '刮痧', '54', '15', '陆建峰', null, null, '11', '2020-06-17 18:20:06', '2020-06-17 19:52:50', null, null, null, null, null, null, null, null, null, '67258748', null, null, '0', '0', '0', '0', '', '0', null, '', '0', '0', null, '', '');
INSERT INTO `aikang_wbillitem` VALUES ('204', 'aikang', '0', '1', '0', '', '1', '201', '0', '3', '20200622', '4', '中药沐足', '47', '5', '黄贞初', null, null, '2000', '2020-06-22 18:06:22', '2020-06-22 18:09:19', '2020-06-22 22:10:16', null, null, '2020-06-22 22:21:28', null, null, null, null, null, '36127106', null, null, '64', '2', '0', '196', '现金', null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('205', 'aikang', '0', '1', '0', '', '1', '201', '0', '3', '20200622', '5', '拔罐', '47', '5', '黄贞初', null, null, '2000', '2020-06-22 18:06:22', '2020-06-22 18:24:19', '2020-06-22 22:21:29', null, null, '2020-06-23 01:54:23', null, null, null, null, null, '36127106', null, null, '240', '16', '0', '416', '现金', null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('206', 'aikang', '0', '1', '0', '', '1', '201', '0', '2', '20200622', '3', '中医推拿', '45', '2', '小草', null, null, '2000', '2020-06-22 18:03:11', '2020-06-22 18:06:05', '2020-06-22 22:09:49', null, null, '2020-06-22 22:21:14', null, null, null, null, null, '92856014', null, null, '48', '1.5', '0', '129', '美团', null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('207', 'aikang', '0', '1', '0', '', '1', '201', '0', '5', '20200622', '3', '中医推拿', '50', '9', '黄君慧', null, null, '2000', '2020-06-23 01:58:30', '2020-06-23 02:01:26', '2020-06-23 16:21:09', null, null, '2020-06-23 17:09:54', null, null, null, null, null, '54814981', null, null, '128', '4', '0', '392', null, null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('208', 'aikang', '0', '1', '0', '', '1', '201', '0', '5', '20200622', '7', '艾草沐足', '50', '9', '黄君慧', null, null, '2000', '2020-06-23 01:58:30', '2020-06-23 02:16:26', '2020-06-23 17:09:55', null, null, '2020-06-23 17:23:12', null, null, null, null, null, '54814981', null, null, '35', '1', '0', '98', null, null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('209', 'aikang', '0', '1', '0', '', '1', '201', '0', '4', '20200622', '5', '拔罐', '48', '7', '刘振霞', null, null, '2000', '2020-06-23 01:55:59', '2020-06-23 02:28:29', '2020-06-23 17:20:32', null, null, '2020-06-23 17:26:34', null, null, null, null, null, '56262677', null, null, '15', '1', '0', '35', '现金', null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('210', 'aikang', '0', '1', '0', '', '1', '201', '0', '4', '20200622', '3', '中医推拿', '48', '7', '刘振霞', null, null, '2000', '2020-06-23 01:55:59', '2020-06-23 01:58:29', '2020-06-23 16:20:39', null, null, '2020-06-23 17:09:40', null, null, null, null, null, '56262677', null, null, '128', '4', '0', '344', '口碑', null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('211', 'aikang', '0', '1', '0', '', '1', '201', '0', '4', '20200622', '4', '中药沐足', '48', '7', '刘振霞', null, null, '2000', '2020-06-23 01:55:59', '2020-06-23 02:13:29', '2020-06-23 17:09:42', null, null, '2020-06-23 17:20:31', null, null, null, null, null, '56262677', null, null, '32', '1', '0', '98', null, null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('212', 'aikang', '0', '1', '0', '', '1', '201', '0', '4', '20200622', '6', '刮痧', '48', '7', '刘振霞', null, null, '2000', '2020-06-23 01:55:59', '2020-06-23 02:46:29', '2020-06-23 17:26:35', null, null, '2020-06-23 17:31:55', null, null, null, null, null, '56262677', null, null, '22', '1', '0', '50', '现金', null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('213', 'aikang', '0', '1', '0', '', '1', '201', '0', '6', '20200623', '3', '中医推拿', '51', '10', '余玉华', null, null, '2000', '2020-06-23 18:36:16', '2020-06-23 18:39:11', '2020-06-23 18:46:09', null, null, '2020-06-23 19:18:01', null, null, null, null, null, '51097927', null, null, '80', '2.5', '0', '245', null, null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('214', 'aikang', '0', '1', '0', '', '1', '201', '0', '6', '20200623', '8', '老姜足疗', '51', '10', '余玉华', null, null, '2000', '2020-06-23 18:36:16', '2020-06-23 18:54:11', '2020-06-23 19:18:02', null, null, '2020-06-23 19:52:40', null, null, null, null, null, '51097927', null, null, '105', '3', '0', '294', null, null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('215', 'aikang', '0', '1', '0', '', '1', '201', '0', '7', '20200623', '3', '中医推拿', '53', '12', '江红', null, null, '2000', '2020-06-23 18:47:21', '2020-06-23 18:49:55', '2020-06-23 18:47:50', null, null, '2020-06-23 19:18:08', null, null, null, null, null, '43992001', null, null, '80', '2.5', '0', '245', null, null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('216', 'aikang', '0', '1', '0', '', '1', '201', '0', '7', '20200623', '1', '中医理疗', '53', '12', '江红', null, null, '2000', '2020-06-23 18:47:21', '2020-06-23 19:04:55', '2020-06-23 19:18:08', null, null, '2020-06-23 19:52:54', null, null, null, null, null, '43992001', null, null, '90', '3', '0', '294', null, null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('217', 'aikang', '0', '1', '0', '', '1', '201', '0', '8', '20200623', '3', '中医推拿', '54', '15', '陆建峰', null, null, '2000', '2020-06-23 19:53:47', '2020-06-23 19:56:39', '2020-06-23 19:54:42', null, null, '2020-06-23 20:36:08', null, null, null, null, null, '06113452', null, null, '112', '3.5', '0', '343', null, null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('218', 'aikang', '0', '1', '0', '', '1', '201', '0', '8', '20200623', '7', '艾草沐足', '54', '15', '陆建峰', null, null, '2000', '2020-06-23 19:53:47', '2020-06-23 20:11:39', '2020-06-23 20:36:11', null, null, '2020-06-23 20:51:48', null, null, null, null, null, '06113452', null, null, '35', '1', '0', '98', null, null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('219', 'aikang', '0', '1', '0', '', '1', '201', '0', '9', '20200623', '1', '中医理疗', '56', '18', '董明武', null, null, '2000', '2020-06-23 19:54:02', '2020-06-23 19:57:00', '2020-06-23 20:36:37', null, null, '2020-06-23 20:52:00', null, null, null, null, null, '09619725', null, null, '30', '1', '0', '98', null, null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('220', 'aikang', '0', '1', '0', '', '1', '201', '0', '9', '20200623', '5', '拔罐', '56', '18', '董明武', null, null, '2000', '2020-06-23 19:54:02', '2020-06-23 20:12:00', '2020-06-23 20:52:00', null, null, '2020-06-23 21:05:11', null, null, null, null, null, '09619725', null, null, '15', '1', '0', '35', null, null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('221', 'aikang', '0', '1', '0', '', '1', '201', '0', '10', '20200624', '3', '中医推拿', '58', '20', '陈海涛', null, null, '2000', '2020-06-23 21:16:55', '2020-06-23 21:19:33', '2020-06-23 21:21:20', '2020-06-23 21:51:29', '1745', '2020-06-24 11:59:07', null, null, null, null, null, '19790099', null, null, '448', '14', '0', '1204', '美团', null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('222', 'aikang', '0', '1', '0', '', '1', '201', '0', '10', '20200624', '4', '中药沐足', '58', '20', '陈海涛', null, null, '2000', '2020-06-23 21:16:55', '2020-06-23 22:22:33', '2020-06-24 11:59:08', null, null, '2020-06-24 12:57:54', null, null, null, null, null, '19790099', null, null, '34', '1', '0', '86', '美团', null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('223', 'aikang', '0', '1', '0', '', '1', '201', '0', '11', '20200624', '4', '中药沐足', '49', '8', '任彩凤', null, null, '2000', '2020-06-23 21:17:36', '2020-06-23 21:20:26', '2020-06-23 21:21:57', null, null, '2020-06-23 22:12:04', null, null, null, null, null, '28710744', null, null, '34', '1', '0', '88', null, null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('224', 'aikang', '0', '1', '0', '', '1', '201', '0', '11', '20200624', '5', '拔罐', '49', '8', '任彩凤', null, null, '2000', '2020-06-23 21:17:36', '2020-06-23 22:23:26', '2020-06-23 22:12:06', null, null, '2020-06-24 11:56:43', null, null, null, null, null, '28710744', null, null, '825', '55', '0', '1925', null, null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('225', 'aikang', '0', '1', '0', '', '1', '201', '0', '11', '20200624', '6', '刮痧', '49', '8', '任彩凤', null, null, '2000', '2020-06-23 21:17:36', '2020-06-23 22:41:26', '2020-06-24 11:56:44', null, null, '2020-06-24 12:58:11', null, null, null, null, null, '28710744', null, null, '55', '2.5', '0', '125', null, null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('226', 'aikang', '0', '1', '0', '', '1', '201', '1', '12', '20200624', '1', '中医理疗', '43', '22', '张伟', null, null, '2000', '2020-06-23 21:17:49', '2020-06-23 21:20:45', '2020-06-23 21:20:01', null, null, '2020-06-23 22:10:33', null, null, null, null, null, '47584500', null, null, '50', '1', '0', '126', null, null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('227', 'aikang', '0', '1', '0', '', '1', '201', '0', '13', '20200624', '3', '中医推拿', '48', '7', '刘振霞', null, null, '2000', '2020-06-23 21:18:08', '2020-06-23 21:21:01', '2020-06-23 22:12:41', null, null, '2020-06-24 11:56:52', null, null, null, null, null, '11988655', null, null, '448', '14', '0', '1232', null, null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('228', 'aikang', '0', '1', '0', '', '1', '201', '0', '13', '20200624', '1', '中医理疗', '48', '7', '刘振霞', null, null, '2000', '2020-06-23 21:18:08', '2020-06-23 22:24:01', '2020-06-23 21:22:37', null, null, '2020-06-23 22:12:40', null, null, null, null, null, '11988655', null, null, '45', '1', '0', '126', null, null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('229', 'aikang', '0', '1', '0', '', '1', '201', '0', '13', '20200624', '5', '拔罐', '48', '7', '刘振霞', null, null, '2000', '2020-06-23 21:18:08', '2020-06-23 23:27:01', '2020-06-24 11:56:54', null, null, '2020-06-24 12:58:23', null, null, null, null, null, '11988655', null, null, '60', '4', '0', '140', null, null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('230', 'aikang', '0', '1', '0', '', '1', '201', '0', '13', '20200624', '6', '刮痧', '48', '7', '刘振霞', null, null, '2000', '2020-06-23 21:18:08', '2020-06-23 23:45:01', '2020-06-24 12:58:24', null, null, '2020-06-24 16:33:56', null, null, null, null, null, '11988655', null, null, '187', '8.5', '0', '425', null, null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('231', 'aikang', '0', '1', '0', '', '1', '201', '0', '1', '20200624', '3', '中医推拿', '52', '11', '罗永泽', null, null, '2000', '2020-06-24 16:35:45', '2020-06-24 16:38:34', '2020-06-24 16:36:36', null, null, '2020-06-24 17:51:28', null, null, null, null, null, '92195897', null, null, '48', '1.5', '0', '132', '现付', null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('232', 'aikang', '0', '1', '0', '', '1', '201', '0', '1', '20200624', '5', '拔罐', '52', '11', '罗永泽', null, null, '2000', '2020-06-24 16:35:45', '2020-06-24 17:41:34', '2020-06-24 17:51:29', null, null, '2020-06-24 18:03:47', null, null, null, null, null, '92195897', null, null, '15', '1', '0', '35', '现付', null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('233', 'aikang', '0', '1', '0', '', '4', '206', '0', '1', '20200624', '4', '中药沐足', '44', '1', '刘鹏', null, null, '2000', '2020-06-24 16:35:45', '2020-06-24 16:38:43', '2020-06-24 16:37:07', null, null, '2020-06-24 18:04:18', null, null, null, null, null, '30594950', null, null, '51', '1.5', '0', '129', '美团', null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('234', 'aikang', '0', '1', '0', '', '1', '201', '0', '2', '20200625', '3', '中医推拿', '46', '3', '三姐', null, null, '2000', '2020-06-24 16:35:58', '2020-06-24 16:38:52', '2020-06-24 16:37:59', null, null, '2020-06-24 17:52:54', null, null, null, null, null, '82876899', null, null, '48', '1.5', '0', '132', null, null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('235', 'aikang', '0', '1', '0', '', '1', '201', '0', '2', '20200625', '5', '拔罐', '46', '3', '三姐', null, null, '2000', '2020-06-24 16:35:58', '2020-06-24 17:41:52', '2020-06-24 17:52:55', null, null, '2020-06-24 18:02:30', null, null, null, null, null, '82876899', null, null, '7.5', '0.5', '0', '17.5', null, null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('236', 'aikang', '0', '1', '0', '', '1', '201', '0', '4', '20200625', '3', '中医推拿', '50', '9', '黄君慧', null, null, '2000', '2020-06-24 16:42:43', '2020-06-24 16:45:39', '2020-06-24 16:44:22', null, null, '2020-06-24 17:53:48', null, null, null, null, null, '83274132', null, null, '32', '1', '0', '88', null, null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('237', 'aikang', '0', '1', '0', '', '1', '201', '0', '4', '20200625', '3', '中医推拿', '51', '10', '余玉华', null, null, '2000', '2020-06-24 16:42:43', '2020-06-24 16:45:42', '2020-06-24 16:44:49', null, null, '2020-06-24 18:01:53', null, null, null, null, null, '41286716', null, null, '48', '1.5', '0', '132', null, null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('238', 'aikang', '0', '1', '0', '', '1', '201', '0', '4', '20200625', '3', '中医推拿', '45', '2', '小草', null, null, '2000', '2020-06-24 16:42:43', '2020-06-24 16:45:23', '2020-06-24 16:45:29', '2020-06-24 16:46:04', '397', '2020-06-24 18:03:04', null, null, null, null, null, '20311592', null, null, '32', '1', '0', '88', null, null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('239', 'aikang', '0', '1', '0', '', '1', '201', '0', '3', '20200625', '10', '聚阳箱灸', '57', '19', '张长铁', null, null, '2000', '2020-06-24 16:42:15', '2020-06-24 16:45:11', '2020-06-24 16:43:40', null, null, '2020-06-24 17:52:19', null, null, null, null, null, '62916018', null, null, '45', '1', '0', '158', '现付', null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('240', 'aikang', '0', '1', '0', '', '1', '201', '0', '3', '20200625', '1', '中医理疗', '57', '19', '张长铁', null, null, '2000', '2020-06-24 16:42:15', '2020-06-24 17:48:11', '2020-06-24 17:52:21', null, null, '2020-06-25 11:39:14', null, null, null, null, null, '62916018', null, null, '67.5', '1.5', '0', '121.5', '会员9折', null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('241', 'aikang', '0', '1', '0', '', '1', '201', '0', '5', '20200625', '3', '中医推拿', '47', '5', '黄贞初', null, null, '2000', '2020-06-24 23:11:48', '2020-06-24 23:14:44', '2020-06-24 23:16:32', null, null, '2020-06-25 11:37:06', null, null, null, null, null, '23193313', null, null, '400', '12.5', '0', '1100', null, null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('242', 'aikang', '0', '1', '0', '', '4', '206', '0', '5', '20200625', '7', '艾草沐足', '47', '5', '黄贞初', null, null, '2000', '2020-06-24 23:11:48', '2020-06-25 00:17:44', '2020-06-25 11:37:07', null, null, '2020-06-25 19:32:34', null, null, null, null, null, '23193313', null, null, '280', '8', '0', '704', null, null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('243', 'aikang', '0', '1', '0', '', '1', '201', '0', '1', '20200629', '3', '中医推拿', '54', '15', '陆建峰', null, null, '2000', '2020-06-29 19:09:23', '2020-06-29 19:12:06', '2020-06-29 19:11:58', null, null, '2020-06-29 20:43:50', null, null, null, null, null, '01148976', null, null, '48', '1.5', '0', '132', null, null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('244', 'aikang', '0', '1', '0', '', '1', '201', '0', '1', '20200629', '1', '中医理疗', '56', '18', '董明武', null, null, '2000', '2020-06-29 19:09:23', '2020-06-29 19:12:11', '2020-06-29 19:11:18', null, null, '2020-06-29 20:44:46', null, null, null, null, null, '07608845', null, null, '67.5', '1.5', '0', '189', null, null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('245', 'aikang', '0', '1', '0', '', '1', '201', '0', '1', '20200629', '3', '中医推拿', '43', '22', '张伟', null, null, '2000', '2020-06-29 19:09:23', '2020-06-29 19:12:20', '2020-06-29 19:10:38', null, null, '2020-06-29 20:45:32', null, null, null, null, null, '77230271', null, null, '48', '1.5', '0', '132', null, null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('246', 'aikang', '0', '1', '0', '', '1', '201', '1', '5', '20200629', '3', '中医推拿', '48', '7', '刘振霞', null, null, '2000', '2020-06-29 19:32:44', '2020-06-29 19:35:37', '2020-06-29 19:39:52', null, null, '2020-06-29 20:56:33', null, null, null, null, null, '68803941', null, null, '34', '1', '0', '88', '现金', null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('247', 'aikang', '0', '1', '0', '', '1', '201', '1', '5', '20200629', '3', '中医推拿', '52', '11', '罗永泽', null, null, '2000', '2020-06-29 19:32:44', '2020-06-29 19:35:39', '2020-06-29 19:38:47', null, null, '2020-06-29 20:57:07', null, null, null, null, null, '95092382', null, null, '34', '1', '0', '88', '现金', null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('248', 'aikang', '0', '1', '0', '', '1', '201', '1', '5', '20200629', '3', '中医推拿', '44', '1', '刘鹏', null, null, '2000', '2020-06-29 19:32:44', '2020-06-29 19:35:43', '2020-06-29 19:33:49', null, null, '2020-06-29 20:57:40', null, null, null, null, null, '21750965', null, null, '51', '1.5', '0', '132', null, null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('249', 'aikang', '0', '1', '0', '', '1', '201', '0', '4', '20200629', '3', '中医推拿', '58', '20', '陈海涛', null, null, '2000', '2020-06-29 19:30:47', '2020-06-29 19:33:44', '2020-06-29 19:32:08', null, null, '2020-06-29 20:55:03', null, null, null, null, null, '35829736', null, null, '48', '1.5', '0', '132', null, null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('250', 'aikang', '0', '1', '0', '', '1', '201', '0', '4', '20200629', '3', '中医推拿', '49', '8', '任彩凤', null, null, '2000', '2020-06-29 19:30:47', '2020-06-29 19:33:45', '2020-06-29 19:31:22', null, null, '2020-06-29 20:55:52', null, null, null, null, null, '47181577', null, null, '48', '1.5', '0', '132', null, null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('251', 'aikang', '0', '1', '0', '', '1', '201', '3', '7', '20200629', '5', '拔罐', '51', '10', '余玉华', null, null, '2000', '2020-06-29 22:23:49', '2020-06-29 22:26:47', '2020-06-29 22:25:40', null, null, '2020-06-29 22:37:53', null, null, null, null, null, '60146784', null, null, '15', '1', '0', '35', null, null, null, '', '0', '003', '小兰', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('252', 'aikang', '0', '1', '0', '', '1', '201', '0', '7', '20200629', '3', '中医推拿', '57', '19', '张长铁', null, null, '2000', '2020-06-29 22:23:49', '2020-06-29 22:26:25', '2020-06-29 22:24:29', null, null, '2020-06-29 23:57:29', null, null, null, null, null, '93920725', null, null, '48', '1.5', '0', '132', '原价', null, null, '', '0', '003', '小兰', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('253', 'aikang', '0', '1', '0', '', '1', '201', '0', '7', '20200629', '3', '中医推拿', '50', '9', '黄君慧', null, null, '2000', '2020-06-29 22:23:49', '2020-06-29 22:26:28', '2020-06-29 22:25:11', null, null, '2020-06-30 00:07:46', null, null, null, null, null, '44054685', null, null, '64', '2', '0', '164', '评价折扣', null, null, '', '0', '003', '小兰', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('254', 'aikang', '0', '1', '0', '', '1', '201', '0', '6', '20200701', '3', '中医推拿', '46', '3', '三姐', null, null, '2000', '2020-06-29 22:15:15', '2020-06-29 22:18:05', '2020-06-29 22:17:37', null, null, '2020-06-29 23:27:31', null, null, null, null, null, '02838081', null, null, '64', '2', '0', '176', '原价', null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('255', 'aikang', '0', '1', '0', '', '1', '201', '0', '8', '20200701', '3', '中医推拿', '51', '10', '余玉华', null, null, '2000', '2020-06-30 00:08:08', '2020-06-30 00:11:07', '2020-06-30 00:13:54', '2020-06-30 00:13:55', '2', '2020-07-01 13:38:18', null, null, null, null, null, '15127625', null, null, '1200', '37.5', '0', '3300', null, null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('256', 'aikang', '0', '1', '0', '', '1', '201', '0', '4', '20200701', '3', '中医推拿', '45', '2', '小草', null, null, '2000', '2020-07-01 13:36:48', '2020-07-01 13:39:29', '2020-07-01 13:37:52', null, null, '2020-07-01 14:32:10', null, null, null, null, null, '66645545', null, null, '33', '1', '0', '88', null, null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('257', 'aikang', '0', '1', '0', '', '1', '201', '0', '4', '20200701', '4', '中药沐足', '47', '5', '黄贞初', null, null, '2000', '2020-07-01 13:36:48', '2020-07-01 13:39:41', '2020-07-01 13:38:41', null, null, '2020-07-01 14:32:45', null, null, null, null, null, '21452989', null, null, '34', '1', '0', '88', null, null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('258', 'aikang', '0', '1', '0', '', '1', '201', '0', '4', '20200701', '8', '老姜足疗', '53', '12', '江红', null, null, '2000', '2020-07-01 13:36:48', '2020-07-01 13:39:46', '2020-07-01 13:39:20', null, null, '2020-07-01 14:33:19', null, null, null, null, null, '53762336', null, null, '36.5', '1', '0', '88', null, null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('259', 'aikang', '0', '1', '0', '', '1', '201', '0', '5', '20200702', '3', '中医推拿', '54', '15', '陆建峰', null, null, '2000', '2020-07-01 17:14:30', '2020-07-01 17:17:27', '2020-07-01 17:17:06', null, null, '2020-07-01 21:10:22', null, null, null, null, null, '67353609', null, null, '132', '4', '0', '352', null, null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('260', 'aikang', '0', '1', '0', '', '1', '201', '0', '2', '20200702', '3', '中医推拿', '43', '22', '张伟', null, null, '2000', '2020-07-02 16:13:55', '2020-07-02 16:16:47', '2020-07-02 16:17:19', null, null, '2020-07-03 00:50:27', null, null, null, null, null, '43685079', null, null, '297.5', '8.5', '0', '748', null, null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('261', 'aikang', '0', '1', '0', '', '1', '201', '2', '3', '20200702', '8', '老姜足疗', '58', '20', '陈海涛', null, null, '2000', '2020-07-02 16:14:07', '2020-07-02 16:17:05', '2020-07-02 16:18:43', null, null, '2020-07-03 00:51:03', null, null, null, null, null, '77961869', null, null, '297.5', '8.5', '0', '748', null, null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('262', 'aikang', '0', '1', '0', '', '1', '201', '3', '4', '20200702', '3', '中医推拿', '49', '8', '任彩凤', null, null, '2000', '2020-07-02 16:14:15', '2020-07-02 16:17:14', '2020-07-02 16:19:42', null, null, '2020-07-03 00:51:28', null, null, null, null, null, '25193296', null, null, '272', '8.5', '0', '748', null, null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('263', 'aikang', '0', '1', '0', '', '1', '201', '1', '1', '20200703', '3', '中医推拿', '56', '18', '董明武', null, null, '2000', '2020-07-02 16:13:29', '2020-07-02 16:16:25', '2020-07-02 16:16:01', null, null, '2020-07-03 00:49:46', null, null, null, null, null, '18037911', null, null, '289', '8.5', '0', '748', null, null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('264', 'aikang', '0', '1', '0', '', '1', '201', '1', '1', '20200703', '4', '中药沐足', '56', '18', '董明武', null, null, '2000', '2020-07-02 16:13:29', '2020-07-02 17:19:25', '2020-07-03 00:49:47', null, null, '2020-07-03 23:20:59', null, null, null, null, null, '18037911', null, null, '810', '22.5', '0', '1980', null, null, null, '', '0', null, '系统管理员', '', '');
INSERT INTO `aikang_wbillitem` VALUES ('265', 'aikang', '0', '1', '0', '', '1', '201', '3', '1', '20200704', '5', '拔罐', '49', '8', '任彩凤', null, null, '2000', '2020-07-04 12:14:43', '2020-07-04 12:17:18', '2020-07-04 12:17:35', null, null, '2020-07-04 12:31:22', null, null, null, null, null, '15924640', null, null, '15', '1', '0.5', '35', null, null, null, null, '0', null, '系统管理员', null, '2020-07-04 12:31:41');
INSERT INTO `aikang_wbillitem` VALUES ('266', 'aikang', '0', '1', '0', '', '1', '201', '2', '1', '20200704', '6', '刮痧', '44', '1', '刘鹏', null, null, '2000', '2020-07-04 12:14:43', '2020-07-04 12:17:25', '2020-07-04 12:18:33', null, null, '2020-07-04 12:55:26', null, null, null, null, null, '57983147', null, null, '33', '1.5', '1.125', '75', null, null, null, null, '0', null, '系统管理员', null, '2020-07-04 12:56:55');
INSERT INTO `aikang_wbillitem` VALUES ('267', 'aikang', '0', '1', '0', '', '1', '201', '0', '2', '20200704', '3', '中医推拿', '52', '11', '罗永泽', null, null, '2000', '2020-07-04 12:56:49', '2020-07-04 12:59:45', '2020-07-04 13:03:08', null, null, '2020-07-04 14:02:49', null, null, null, null, null, '77781913', null, null, '32', '1', '1', '88', '原价', null, null, null, '0', null, '系统管理员', null, '2020-07-04 14:03:27');
INSERT INTO `aikang_wbillitem` VALUES ('268', 'aikang', '0', '1', '0', '', '1', '201', '1', '2', '20200704', '3', '中医推拿', '49', '8', '任彩凤', null, null, '2000', '2020-07-04 12:56:49', '2020-07-04 12:58:53', '2020-07-04 13:00:44', null, null, '2020-07-04 14:01:53', null, null, null, null, null, '31034182', null, null, '34', '1', '1', '88', '原价', null, null, null, '0', null, '系统管理员', null, '2020-07-04 16:48:40');
INSERT INTO `aikang_wbillitem` VALUES ('269', 'aikang', '0', '1', '0', '', '1', '201', '1', '2', '20200704', '4', '中药沐足', '49', '8', '任彩凤', null, null, '2000', '2020-07-04 12:56:49', '2020-07-04 14:01:53', '2020-07-04 14:01:54', '2020-07-04 14:39:51', '8', '2020-07-04 15:06:41', null, null, null, null, null, '31034182', null, null, '36', '1', '1', '88', '原价', null, null, null, '0', null, '系统管理员', null, '2020-07-04 16:48:40');
INSERT INTO `aikang_wbillitem` VALUES ('270', 'aikang', '0', '1', '0', '', '1', '201', '2', '2', '20200704', '4', '中药沐足', '48', '7', '刘振霞', null, null, '2000', '2020-07-04 12:56:49', '2020-07-04 12:59:09', '2020-07-04 13:01:31', null, null, '2020-07-04 14:02:17', null, null, null, null, null, '25279645', null, null, '34', '1', '1', '88', '原价', null, null, null, '0', null, '系统管理员', null, '2020-07-04 16:48:40');
INSERT INTO `aikang_wbillitem` VALUES ('271', 'aikang', '0', '1', '0', '', '1', '201', '2', '2', '20200704', '6', '刮痧', '48', '7', '刘振霞', null, null, '2000', '2020-07-04 12:56:49', '2020-07-04 14:02:09', '2020-07-04 14:02:18', null, null, '2020-07-04 15:07:12', null, null, null, null, null, '25279645', null, null, '55', '2.5', '1.875', '125', '原价', null, null, null, '0', null, '系统管理员', null, '2020-07-04 16:48:40');
INSERT INTO `aikang_wbillitem` VALUES ('272', 'aikang', '0', '1', '0', '', '1', '201', '0', '3', '20200704', '3', '中医推拿', '46', '3', '三姐', null, null, '2000', '2020-07-04 16:57:25', '2020-07-04 17:00:13', '2020-07-04 16:59:09', null, null, '2020-07-04 20:26:38', null, null, null, null, null, '68552213', null, null, '112', '3.5', '3.5', '308', '原价', null, null, null, '0', null, '系统管理员', null, '2020-07-04 20:32:04');
INSERT INTO `aikang_wbillitem` VALUES ('273', 'aikang', '0', '1', '0', '', '1', '201', '0', '3', '20200704', '3', '中医推拿', '57', '19', '张长铁', null, null, '2000', '2020-07-04 16:57:25', '2020-07-04 17:00:16', '2020-07-04 16:59:33', null, null, '2020-07-04 20:27:11', null, null, null, null, null, '96840530', null, null, '112', '3.5', '3.5', '308', '原价', null, null, null, '0', null, '系统管理员', null, '2020-07-04 20:32:04');
INSERT INTO `aikang_wbillitem` VALUES ('274', 'aikang', '0', '1', '0', '', '1', '201', '0', '3', '20200704', '1', '中医理疗', '50', '9', '黄君慧', null, null, '2000', '2020-07-04 16:57:25', '2020-07-04 17:00:18', '2020-07-04 17:00:47', null, null, '2020-07-04 20:27:49', null, null, null, null, null, '75108365', null, null, '157.5', '3.5', '3.5', '441', '原价', null, null, null, '0', null, '系统管理员', null, '2020-07-04 20:32:04');
INSERT INTO `aikang_wbillitem` VALUES ('275', 'aikang', '0', '1', '0', '', '1', '201', '0', '3', '20200704', '7', '艾草沐足', '51', '10', '余玉华', null, null, '2000', '2020-07-04 16:57:25', '2020-07-04 17:00:21', '2020-07-04 17:01:12', null, null, '2020-07-04 20:28:12', null, null, null, null, null, '33162888', null, null, '122.5', '3.5', '3.5', '308', '原价', null, null, null, '0', null, '系统管理员', null, '2020-07-04 20:32:04');
INSERT INTO `aikang_wbillitem` VALUES ('276', 'aikang', '0', '1', '0', '', '1', '201', '0', '3', '20200704', '8', '老姜足疗', '45', '2', '小草', null, null, '2000', '2020-07-04 16:57:25', '2020-07-04 17:00:24', '2020-07-04 17:01:55', null, null, '2020-07-04 20:28:39', null, null, null, null, null, '51516345', null, null, '126', '3.5', '3.5', '308', '原价', null, null, null, '0', null, '系统管理员', null, '2020-07-04 20:32:04');
INSERT INTO `aikang_wbillitem` VALUES ('277', 'aikang', '0', '1', '0', '', '1', '201', '0', '4', '20200704', '3', '中医推拿', '47', '5', '黄贞初', null, null, '2000', '2020-07-04 16:57:36', '2020-07-04 17:00:31', '2020-07-04 17:02:11', null, null, '2020-07-04 20:29:47', null, null, null, null, null, '27084272', null, null, '112', '3.5', '3.5', '308', '原价', null, null, null, '0', null, '系统管理员', null, '2020-07-04 20:36:32');
INSERT INTO `aikang_wbillitem` VALUES ('278', 'aikang', '0', '1', '0', '', '1', '201', '0', '4', '20200704', '3', '中医推拿', '53', '12', '江红', null, null, '2000', '2020-07-04 16:57:36', '2020-07-04 17:00:33', '2020-07-04 17:02:38', null, null, '2020-07-04 20:30:16', null, null, null, null, null, '25410944', null, null, '112', '3.5', '3.5', '308', '原价', null, null, null, '0', null, '系统管理员', null, '2020-07-04 20:36:32');
INSERT INTO `aikang_wbillitem` VALUES ('279', 'aikang', '0', '1', '0', '', '1', '201', '0', '4', '20200704', '3', '中医推拿', '54', '15', '陆建峰', null, null, '2000', '2020-07-04 16:57:36', '2020-07-04 17:00:34', '2020-07-04 17:03:17', null, null, '2020-07-04 20:30:39', null, null, null, null, null, '16573290', null, null, '115.5', '3.5', '3.5', '308', '原价', null, null, null, '0', null, '系统管理员', null, '2020-07-04 20:36:32');
INSERT INTO `aikang_wbillitem` VALUES ('280', 'aikang', '0', '1', '0', '', '3', '205', '0', '6', '20200704', '4', '中药沐足', '44', '1', '刘鹏', null, null, '2000', '2020-07-04 20:24:52', '2020-07-04 20:26:14', '2020-07-04 20:32:53', null, null, '2020-07-04 23:47:08', null, null, null, null, null, '19234441', null, null, '119', '3.5', '3.5', '308', '原价', null, null, null, '0', null, '系统管理员', null, '2020-07-04 23:48:38');
INSERT INTO `aikang_wbillitem` VALUES ('281', 'aikang', '0', '1', '0', '', '3', '205', '0', '6', '20200704', '4', '中药沐足', '49', '8', '任彩凤', null, null, '2000', '2020-07-04 20:24:52', '2020-07-04 20:26:16', '2020-07-04 20:33:18', null, null, '2020-07-04 23:47:38', null, null, null, null, null, '31576429', null, null, '119', '3.5', '3.5', '308', '原价', null, null, null, '0', null, '系统管理员', null, '2020-07-04 23:48:42');
INSERT INTO `aikang_wbillitem` VALUES ('282', 'aikang', '0', '1', '0', '', '4', '206', '0', '6', '20200704', '5', '拔罐', '52', '11', '罗永泽', null, null, '2000', '2020-07-04 20:24:52', '2020-07-04 20:27:25', '2020-07-04 20:34:13', null, null, '2020-07-04 23:49:10', null, null, null, null, null, '21759386', null, null, '195', '13', '6.5', '455', '原价', null, null, null, '0', null, '系统管理员', null, '2020-07-04 23:49:21');
INSERT INTO `aikang_wbillitem` VALUES ('283', 'aikang', '0', '1', '0', '', '1', '201', '1', '5', '20200704', '1', '中医理疗', '56', '18', '董明武', null, null, '2000', '2020-07-04 16:57:53', '2020-07-04 17:00:43', '2020-07-04 17:03:49', null, null, '2020-07-04 20:30:55', null, null, null, null, null, '94172794', null, null, '175', '3.5', '3.5', '441', '原价', null, null, null, '0', null, '系统管理员', null, '2020-07-04 23:49:32');
INSERT INTO `aikang_wbillitem` VALUES ('284', 'aikang', '0', '1', '0', '', '1', '201', '1', '5', '20200704', '3', '中医推拿', '43', '22', '张伟', null, null, '2000', '2020-07-04 16:57:53', '2020-07-04 17:00:48', '2020-07-04 17:04:39', null, null, '2020-07-04 20:31:17', null, null, null, null, null, '82366930', null, null, '129.5', '3.5', '3.5', '308', '原价', null, null, null, '0', null, '系统管理员', null, '2020-07-04 23:49:39');
INSERT INTO `aikang_wbillitem` VALUES ('285', 'aikang', '0', '1', '0', '', '1', '201', '1', '5', '20200704', '5', '拔罐', '56', '18', '董明武', null, null, '2000', '2020-07-04 16:57:53', '2020-07-04 18:03:43', '2020-07-04 20:30:57', null, null, '2020-07-04 23:45:36', null, null, null, null, null, '94172794', null, null, '208', '13', '6.5', '455', '原价', null, null, null, '0', null, '系统管理员', null, '2020-07-04 23:49:53');
INSERT INTO `aikang_wbillitem` VALUES ('286', 'aikang', '0', '1', '0', '', '1', '201', '1', '5', '20200704', '1', '中医理疗', '43', '22', '张伟', null, null, '2000', '2020-07-04 16:57:53', '2020-07-04 18:03:48', '2020-07-04 20:31:18', null, null, '2020-07-04 23:45:55', null, null, null, null, null, '82366930', null, null, '185.5', '3.5', '3.5', '441', '原价', null, null, null, '0', null, '系统管理员', null, '2020-07-04 23:50:02');
INSERT INTO `aikang_wbillitem` VALUES ('287', 'aikang', '0', '1', '0', '', '2', '202', '0', '6', '20200704', '3', '中医推拿', '58', '20', '陈海涛', null, null, '2000', '2020-07-04 20:24:52', '2020-07-04 20:26:03', '2020-07-04 20:32:28', null, null, '2020-07-04 23:46:21', null, null, null, null, null, '87769172', null, null, '112', '3.5', '3.5', '308', '原价', null, null, null, '0', null, '系统管理员', null, '2020-07-04 23:50:22');
INSERT INTO `aikang_wbillitem` VALUES ('288', 'aikang', '0', '1', '0', '', '4', '206', '0', '6', '20200704', '4', '中药沐足', '48', '7', '刘振霞', null, null, '2000', '2020-07-04 20:24:52', '2020-07-04 20:26:50', '2020-07-04 20:33:41', null, null, '2020-07-04 23:46:41', null, null, null, null, null, '58584730', null, null, '119', '3.5', '3.5', '308', '原价', null, null, null, '0', null, '系统管理员', null, '2020-07-04 23:50:27');
INSERT INTO `aikang_wbillitem` VALUES ('289', 'aikang', '0', '1', '0', '', '2', '202', '0', '6', '20200704', '4', '中药沐足', '58', '20', '陈海涛', null, null, '2000', '2020-07-04 20:24:52', '2020-07-04 21:29:03', '2020-07-04 23:46:22', null, null, '2020-07-05 00:54:45', null, null, null, null, null, '87769172', null, null, '34', '1', '1', '88', '原价', null, null, null, '0', null, '系统管理员', null, '2020-07-05 01:14:18');
INSERT INTO `aikang_wbillitem` VALUES ('290', 'aikang', '0', '1', '0', '', '4', '206', '0', '6', '20200704', '5', '拔罐', '48', '7', '刘振霞', null, null, '2000', '2020-07-04 20:24:52', '2020-07-04 21:29:50', '2020-07-04 23:46:42', null, null, '2020-07-05 00:35:20', null, null, null, null, null, '58584730', null, null, '45', '3', '1.5', '105', '原价', null, null, null, '0', null, '系统管理员', null, '2020-07-05 01:14:18');
INSERT INTO `aikang_wbillitem` VALUES ('291', 'aikang', '0', '1', '0', '', '4', '206', '0', '6', '20200704', '6', '刮痧', '58', '20', '陈海涛', null, null, '2000', '2020-07-04 20:24:52', '2020-07-04 22:32:03', '2020-07-05 00:54:46', '2020-07-05 01:04:06', '8', '2020-07-05 01:12:41', null, null, null, null, null, '87769172', null, null, '11', '0.5', '0.375', '25', '原价', null, null, null, '0', null, '系统管理员', null, '2020-07-05 01:14:18');
INSERT INTO `aikang_wbillitem` VALUES ('292', 'aikang', '0', '1', '0', '', '1', '201', '1', '5', '20200704', '7', '艾草沐足', '43', '22', '张伟', null, null, '2000', '2020-07-04 16:57:53', '2020-07-04 19:06:48', '2020-07-04 23:45:56', null, null, '2020-07-05 01:12:20', null, null, null, null, null, '82366930', null, null, '60', '1.5', '1.5', '132', '原价', null, null, null, '0', null, '系统管理员', null, '2020-07-05 01:14:23');
INSERT INTO `aikang_wbillitem` VALUES ('293', 'aikang', '0', '1', '0', '', '1', '201', '3', '9', '20200704', '7', '艾草沐足', '45', '2', '小草', null, null, '2000', '2020-07-05 00:06:35', '2020-07-05 00:18:25', '2020-07-05 00:12:19', null, null, '2020-07-05 01:13:20', null, null, null, null, null, '66967148', null, null, '36', '1', '1', '88', '原价', null, null, null, '0', null, '系统管理员', null, '2020-07-05 01:14:32');
INSERT INTO `aikang_wbillitem` VALUES ('294', 'aikang', '0', '1', '0', '', '1', '201', '1', '10', '20200704', '3', '中医推拿', '54', '15', '陆建峰', null, null, '2000', '2020-07-05 00:16:36', '2020-07-05 00:18:48', '2020-07-05 00:18:10', null, null, '2020-07-05 01:13:39', null, null, null, null, null, '61022657', null, null, '35', '1', '1', '88', '原价', null, null, null, '0', null, '系统管理员', null, '2020-07-05 01:14:36');
INSERT INTO `aikang_wbillitem` VALUES ('295', 'aikang', '0', '1', '0', '', '1', '201', '0', '7', '20200704', '3', '中医推拿', '46', '3', '三姐', null, null, '2000', '2020-07-04 23:52:12', '2020-07-04 23:55:03', '2020-07-05 00:04:50', null, null, '2020-07-05 01:12:55', null, null, null, null, null, '20345248', null, null, '32', '1', '1', '88', '原价', null, null, null, '0', null, '系统管理员', null, '2020-07-05 01:14:40');
INSERT INTO `aikang_wbillitem` VALUES ('296', 'aikang', '0', '1', '0', '', '1', '201', '0', '7', '20200705', '4', '中药沐足', '46', '3', '三姐', null, null, '2000', '2020-07-04 23:52:12', '2020-07-05 00:58:03', '2020-07-05 01:12:56', null, null, '2020-07-05 02:25:22', null, null, null, null, null, '20345248', null, null, '51', '1.5', '1.5', '132', '原价', null, null, null, '0', null, '系统管理员', null, '2020-07-05 17:35:42');
INSERT INTO `aikang_wbillitem` VALUES ('297', 'aikang', '0', '1', '0', '', '1', '201', '0', '1', '20200705', '5', '拔罐', '57', '19', '张长铁', null, null, '2000', '2020-07-05 17:36:14', '2020-07-05 17:39:12', '2020-07-05 17:37:31', null, null, '2020-07-05 18:06:39', null, null, null, null, null, '47486250', null, null, '30', '2', '1', '70', '原价', null, null, null, '0', null, '系统管理员', null, '2020-07-05 18:07:41');
INSERT INTO `aikang_wbillitem` VALUES ('298', 'aikang', '0', '1', '0', '', '1', '201', '0', '8', '20200705', '3', '中医推拿', '54', '15', '陆建峰', null, null, '2000', '2020-07-04 23:53:42', '2020-07-05 01:56:14', '2020-07-05 02:24:22', null, null, '2020-07-05 18:10:17', null, null, null, null, null, '56592963', null, null, '528', '16', '16', '1408', '原价', null, null, null, '0', null, '系统管理员', null, '2020-07-05 18:11:06');
INSERT INTO `aikang_wbillitem` VALUES ('299', 'aikang', '0', '1', '0', '', '1', '201', '0', '2', '20200719', '7', '艾草沐足', '45', '2', '小草', null, null, '2000', '2020-07-05 18:07:22', '2020-07-05 18:10:18', '2020-07-05 18:08:56', '2020-07-19 12:45:50', '145', '2020-07-19 19:16:14', null, null, null, null, null, '51706940', null, null, '12132', '337', '337', '29656', '原价', null, null, null, '0', null, '系统管理员', null, '2020-07-22 00:12:56');
INSERT INTO `aikang_wbillitem` VALUES ('300', 'aikang', '0', '1', '0', '', '4', '206', '3', '2', '20200719', '6', '刮痧', '45', '2', '小草', null, null, '2000', '2020-07-19 19:06:56', '2020-07-19 20:09:35', '2020-07-19 19:16:29', '2020-07-19 22:57:09', '1', '2020-07-21 23:02:44', null, null, null, null, null, '93150755', null, null, '2728', '124', '93', '6200', '原价', null, null, null, '0', null, '系统管理员', null, '2020-07-22 00:13:03');
INSERT INTO `aikang_wbillitem` VALUES ('301', 'aikang', '0', '1', '0', '', '1', '201', '0', '1', '20200719', '7', '艾草沐足', '45', '2', '小草', null, null, '2000', '2020-07-19 19:05:09', '2020-07-19 19:08:05', '2020-07-21 23:07:30', '2020-07-21 23:48:14', '3', '2020-07-22 00:14:40', null, null, null, null, null, '28095279', null, null, '36', '1', '1', '88', '原价', null, null, null, '0', null, '系统管理员', null, '2020-07-22 00:17:51');
INSERT INTO `aikang_wbillitem` VALUES ('302', 'aikang', '0', '1', '0', '', '1', '201', '3', '3', '20200719', '3', '中医推拿', '45', '2', '小草', null, null, '2000', '2020-07-22 00:18:18', '2020-07-22 00:21:15', '2020-07-22 00:46:15', null, null, '2020-07-22 00:47:15', null, null, null, null, null, '31328021', null, null, '0', '0', '0', '0', '原价', null, null, null, '0', null, '系统管理员', null, '2020-07-22 00:49:17');
INSERT INTO `aikang_wbillitem` VALUES ('303', 'aikang', '0', '1', '0', '', '1', '201', '3', '4', '20200719', '3', '中医推拿', '45', '2', '小草', null, null, '2000', '2020-07-22 00:49:32', '2020-07-22 00:52:31', '2020-07-22 00:57:07', null, null, '2020-07-22 00:59:02', null, null, null, null, null, '87933099', null, null, '0', '0', '0', '0', '原价', null, null, null, '0', null, '系统管理员', null, '2020-07-22 01:07:28');
INSERT INTO `aikang_wbillitem` VALUES ('304', 'aikang', '0', '1', '0', '', '1', '201', '3', '5', '20200719', '3', '中医推拿', '45', '2', '小草', null, null, '2000', '2020-07-22 01:07:40', '2020-07-22 01:10:38', '2020-07-22 01:08:51', null, null, '2020-07-22 01:09:40', null, null, null, null, null, '54153297', null, null, '0', '0', '0', '0', '原价', null, null, null, '0', null, '系统管理员', null, '2020-07-22 01:17:28');
INSERT INTO `aikang_wbillitem` VALUES ('305', 'aikang', '0', '1', '0', '', '1', '201', '3', '6', '20200719', '3', '中医推拿', '45', '2', '小草', null, null, '2000', '2020-07-22 01:17:36', '2020-07-22 01:20:35', '2020-07-22 01:18:00', null, null, '2020-07-22 01:18:22', null, null, null, null, null, '98440282', null, null, '16.5', '0.5', '0.5', '44', '原价', null, null, null, '0', null, '系统管理员', null, '2020-07-22 01:18:49');
INSERT INTO `aikang_wbillitem` VALUES ('306', 'aikang', '0', '0', '0', '', '1', '201', '0', '2', '20201029', '3', '中医推拿', '50', '9', '黄君慧', null, null, '2000', '2020-07-05 18:07:22', '2020-07-05 18:10:14', '2020-07-05 18:08:13', null, null, '2020-11-10 00:12:54', null, null, null, null, null, '65648904', null, null, '97728', '3054', '3054', '262644', '美团', null, null, null, '0', null, '系统管理员', null, '2020-11-10 01:01:54');
INSERT INTO `aikang_wbillitem` VALUES ('307', 'aikang', '0', '0', '0', '', '1', '201', '0', '2', '20201029', '4', '中药沐足', '51', '10', '余玉华', null, null, '2000', '2020-07-05 18:07:22', '2020-07-05 18:10:16', '2020-07-05 18:08:37', null, null, '2020-07-22 09:51:28', null, null, null, null, null, '75140270', null, null, '13600', '400', '400', '35200', '原价', null, null, null, '0', null, '系统管理员', null, '2020-11-10 01:01:54');
INSERT INTO `aikang_wbillitem` VALUES ('308', 'aikang', '0', '0', '0', '', '1', '201', '3', '7', '20201029', '3', '中医推拿', '45', '2', '小草', null, null, '2000', '2020-07-22 01:18:57', '2020-07-22 01:21:56', '2020-07-22 01:53:06', '2020-07-22 09:23:43', '141', '2020-11-10 00:36:33', null, null, null, null, null, '66125699', null, null, '87879', '2663', '2663', '229018', '美团', null, null, null, '0', null, '系统管理员', null, '2020-11-10 01:02:16');
INSERT INTO `aikang_wbillitem` VALUES ('309', 'aikang', '0', '0', '0', '', '3', '205', '1', '10', '20201109', '4', '中药沐足', '54', '15', '陆建峰', null, null, '2000', '2020-07-05 00:16:36', '2020-07-05 01:21:48', '2020-07-05 01:13:40', null, null, '2020-07-05 02:24:14', null, null, null, null, null, '61022657', null, null, '37', '1', '1', '88', '原价', null, null, null, '0', null, '系统管理员', null, '2020-11-10 01:47:57');
INSERT INTO `aikang_wbillitem` VALUES ('346', 'aikang', '1', '6', '2', '1603354152565', null, '', '3', '1', '20201112', '3', '中医推拿', '49', '8', '任彩凤', null, null, '2000', '2020-10-17 06:58:14', '2020-10-13 16:55:04', '2020-11-10 22:08:57', null, null, '2020-11-12 20:50:00', '63', null, '1', '700', null, '57175839', null, null, '32', '1', '1', '7', null, null, null, null, '0', '8', '任彩凤', null, '2020-11-12 20:50:00');
INSERT INTO `aikang_wbillitem` VALUES ('347', 'aikang', '1', '6', '3', '1603354152565', null, '', '0', '1', '20201112', '2', '采耳', '53', '12', '江红', null, null, '2000', '2020-10-17 06:58:14', '2020-10-13 17:56:12', '2020-11-10 23:20:22', null, null, '2020-11-12 20:50:00', '63', null, '1', '900', null, '57175839', null, null, '28', '1', '0.5', '9', null, null, null, null, '0', '12', '江红', null, '2020-11-12 20:50:00');
INSERT INTO `aikang_wbillitem` VALUES ('348', 'aikang', '1', '6', '4', '1603354152565', null, '', '0', '1', '20201112', '7', '艾草沐足', '47', '5', '黄贞初', null, null, '2000', '2020-10-17 06:58:14', '2020-10-13 17:57:07', '2020-11-10 23:20:54', null, null, '2020-11-12 20:50:00', '63', null, '1', '1100', null, '57175839', null, null, '35', '1', '1', '11', null, null, null, null, '0', '5', '黄贞初', null, '2020-11-12 20:50:00');
INSERT INTO `aikang_wbillitem` VALUES ('349', 'aikang', '1', '6', '5', '1603354152565', null, '', '2', '1', '20201112', '1', '中医理疗', '48', '7', '刘振霞', null, null, '2000', '2020-10-17 06:58:14', '2020-10-13 16:57:52', '2020-11-11 18:58:45', null, null, '2020-11-12 20:50:00', '63', null, '1', '1200', null, '57175839', null, null, '45', '1', '1', '12', null, null, null, null, '0', '7', '刘振霞', null, '2020-11-12 20:50:00');
INSERT INTO `aikang_wbillitem` VALUES ('350', 'aikang', '1', '3', '0', '6316035943903341', null, '', '1', '1', '20201112', '3', '中医推拿', '43', '22', '张伟', null, null, '2000', '2020-10-25 10:53:10', '2020-10-25 10:41:07', '2020-11-10 22:27:42', null, null, '2020-11-12 20:50:00', '63', null, '1', '5200', null, '66758567', null, null, '37', '1', '1', '52', null, null, null, null, '0', '22', '张伟', null, '2020-11-12 20:50:00');
INSERT INTO `aikang_wbillitem` VALUES ('351', 'aikang', '1', '3', '1', '6316035943903341', null, '', '2', '1', '20201112', '1', '中医理疗', '58', '20', '陈海涛', null, null, '2000', '2020-10-25 10:53:10', '2020-10-25 10:41:33', '2020-11-10 22:26:52', null, null, '2020-11-12 20:50:00', '63', null, '1', '4525', null, '66758567', null, null, '45', '1', '1', '45.25', null, null, null, null, '0', '20', '陈海涛', null, '2020-11-12 20:50:00');
INSERT INTO `aikang_wbillitem` VALUES ('352', 'aikang', '1', '3', '2', '6316035943903341', null, '', '0', '1', '20201112', '7', '艾草沐足', '56', '18', '董明武', null, null, '2000', '2020-10-25 10:53:10', '2020-10-25 10:42:00', '2020-11-10 22:28:07', null, null, '2020-11-12 20:50:00', '63', null, '1', '18525', null, '66758567', null, null, '35', '1', '1', '185.25', null, null, null, null, '0', '18', '董明武', null, '2020-11-12 20:50:00');
INSERT INTO `aikang_wbillitem` VALUES ('353', 'aikang', '1', '2', '0', '6316039661204081', null, '', '0', '1', '20201112', '4', '中药沐足', '44', '1', '刘鹏', null, null, '2000', '2020-10-29 18:08:40', '2020-10-29 18:08:35', '2020-11-10 22:28:41', null, null, '2020-11-12 20:50:00', '63', null, '1', '1500', null, '97545293', null, null, '34', '1', '1', '15', null, null, null, null, '0', '1', '刘鹏', null, '2020-11-12 20:50:00');
INSERT INTO `aikang_wbillitem` VALUES ('354', 'aikang', '1', '2', '1', '6316039661204081', null, '', '1', '1', '20201112', '3', '中医推拿', '52', '11', '罗永泽', null, null, '2000', '2020-10-29 18:08:40', '2020-10-29 18:08:09', '2020-11-10 22:29:15', null, null, '2020-11-12 20:50:00', '63', null, '1', '2100', null, '97545293', null, null, '34', '1', '1', '21', null, null, null, null, '0', '11', '罗永泽', null, '2020-11-12 20:50:00');
INSERT INTO `aikang_wbillitem` VALUES ('355', 'aikang', '1', '6', '3', '1603354152565', null, '', '0', '1', '20201112', '8', '老姜足疗', '53', '12', '江红', null, null, '2000', '2020-10-17 06:58:14', '2020-10-13 16:55:52', '2020-11-10 22:24:35', null, null, '2020-11-10 23:20:21', '63', null, '1', '800', null, '57175839', null, null, '36.5', '1', '1', '88', null, null, null, null, '0', null, '系统管理员', null, '2020-11-12 22:22:40');
INSERT INTO `aikang_wbillitem` VALUES ('356', 'aikang', '1', '6', '4', '1603354152565', null, '', '0', '1', '20201112', '3', '中医推拿', '47', '5', '黄贞初', null, null, '2000', '2020-10-17 06:58:14', '2020-10-13 16:56:47', '2020-11-10 22:25:57', null, null, '2020-11-10 23:20:53', '63', null, '1', '1000', null, '57175839', null, null, '32', '1', '1', '88', null, null, null, null, '0', null, '系统管理员', null, '2020-11-12 22:24:36');
INSERT INTO `aikang_wbillitem` VALUES ('357', 'aikang', '1', '3', '1', '6316035943903341', null, '', '2', '1', '20201112', '7', '艾草沐足', '58', '20', '陈海涛', null, null, '2000', '2020-10-25 10:53:10', '2020-10-25 11:41:53', '2020-11-12 22:26:30', null, null, '2020-11-12 22:26:40', '63', null, '1', '3685', null, '66758567', null, null, '35', '1', '1', '36.85', null, null, null, null, '0', '20', '陈海涛', null, '2020-11-12 22:26:40');
INSERT INTO `aikang_wbillitem` VALUES ('358', 'aikang', '0', '0', '0', '', '1', '20001', '0', '1', '20201112', '3', '中医推拿', '55', '16', '胡崇飞', '0', '', '2000', '2020-11-11 23:44:59', '2020-11-11 23:47:55', '2020-11-12 00:10:15', '', '0', '2020-11-12 22:26:51', '0', '', '0', '100', '0', '57854575', '', null, '720', '22.5', '22.5', '1980', '原价', null, null, null, '0', null, '系统管理员', null, '2020-11-12 22:27:24');
INSERT INTO `aikang_wbillitem` VALUES ('359', 'aikang', '1', '2', '0', '6316051929679951', '0', '', '2', '1', '20201113', '6', '刮痧', '46', '3', '三姐', '0', '', '2000', '2020-11-12 22:56:07', '2020-11-10 18:16:28', '2020-11-12 22:59:17', '', '0', '2020-11-13 06:21:50', '63', '', '1', '100', '0', '22702635', '', null, '22', '1', '0.75', '1', '', null, null, null, '0', '3', '三姐', null, '2020-11-13 06:21:50');
INSERT INTO `aikang_wbillitem` VALUES ('360', 'aikang', '1', '2', '1', '6316051929679951', '0', '', '1', '1', '20201113', '1', '中医理疗', '54', '15', '陆建峰', '0', '', '2000', '2020-11-12 22:56:07', '2020-11-10 18:07:56', '2020-11-12 23:00:31', '', '0', '2020-11-13 06:21:50', '63', '', '1', '1202', '0', '22702635', '', null, '51', '1', '1', '12.02', '', null, null, null, '0', '15', '陆建峰', null, '2020-11-13 06:21:50');
INSERT INTO `aikang_wbillitem` VALUES ('361', 'aikang', '100', '4', '1', '6316052353170583', '0', '', '0', '3', '20201113', '8', '老姜足疗', '51', '10', '余玉华', '0', '', '2000', '2020-11-13 10:41:57', '2020-11-12 23:14:01', '2020-11-13 11:58:58', '', '0', '2020-11-13 12:59:00', '63', '', '1', '200', '0', '90941460', '', null, '35', '1', '1', '2', '', null, null, null, '0', '10', '余玉华', null, '2020-11-13 12:59:00');
INSERT INTO `aikang_wbillitem` VALUES ('362', 'aikang', '100', '4', '0', '6316052353170583', '0', '', '1', '3', '20201113', '3', '中医推拿', '47', '5', '黄贞初', '0', '', '2000', '2020-11-13 10:41:57', '2020-11-12 23:13:21', '2020-11-13 11:59:20', '', '0', '2020-11-13 12:59:20', '63', '', '1', '200', '0', '90941460', '', null, '34', '1', '1', '2', '', null, null, null, '0', '5', '黄贞初', null, '2020-11-13 12:59:20');
INSERT INTO `aikang_wbillitem` VALUES ('363', 'aikang', '100', '4', '3', '6316052353170583', '0', '', '2', '3', '20201113', '8', '老姜足疗', '57', '19', '张长铁', '0', '', '2000', '2020-11-13 10:41:57', '2020-11-12 23:13:52', '2020-11-13 11:59:38', '', '0', '2020-11-13 12:59:40', '63', '', '1', '200', '0', '90941460', '', null, '35', '1', '1', '2', '', null, null, null, '0', '19', '张长铁', null, '2020-11-13 12:59:40');
INSERT INTO `aikang_wbillitem` VALUES ('364', 'aikang', '100', '4', '2', '6316052353170583', '0', '', '0', '3', '20201113', '4', '中药沐足', '50', '9', '黄君慧', '0', '', '2000', '2020-11-13 10:41:57', '2020-11-12 23:13:39', '2020-11-13 12:00:00', '', '0', '2020-11-13 13:00:00', '63', '', '1', '200', '0', '90941460', '', null, '34', '1', '1', '2', '', null, null, null, '0', '9', '黄君慧', null, '2020-11-13 13:00:00');
INSERT INTO `aikang_wbillitem` VALUES ('365', 'aikang', '100', '4', '0', '6316052353170583', '0', '', '1', '3', '20201113', '5', '拔罐', '47', '5', '黄贞初', '0', '', '2000', '2020-11-13 10:41:57', '2020-11-13 00:13:41', '2020-11-13 17:03:36', '', '0', '2020-11-13 17:18:36', '63', '', '1', '200', '0', '90941460', '', null, '0', '0', '0', '0', '', null, null, null, '0', null, '系统管理员', null, '2020-11-13 22:53:52');
INSERT INTO `aikang_wbillitem` VALUES ('366', 'aikang', '100', '4', '1', '6316052353170583', '0', '', '0', '3', '20201113', '3', '中医推拿', '51', '10', '余玉华', '0', '', '2000', '2020-11-13 10:41:57', '2020-11-13 00:14:21', '2020-11-13 16:52:25', '', '0', '2020-11-13 17:18:36', '63', '', '1', '200', '0', '90941460', '', null, '0', '0', '0', '0', '', null, null, null, '0', null, '系统管理员', null, '2020-11-13 22:53:52');
INSERT INTO `aikang_wbillitem` VALUES ('367', 'aikang', '100', '4', '2', '6316052353170583', '0', '', '0', '3', '20201113', '5', '拔罐', '50', '9', '黄君慧', '0', '', '2000', '2020-11-13 10:41:57', '2020-11-13 00:13:59', '2020-11-13 17:04:07', '', '0', '2020-11-13 17:18:36', '63', '', '1', '200', '0', '90941460', '', null, '0', '0', '0', '0', '', null, null, null, '0', null, '系统管理员', null, '2020-11-13 22:53:52');
INSERT INTO `aikang_wbillitem` VALUES ('368', 'aikang', '100', '4', '3', '6316052353170583', '0', '', '2', '3', '20201113', '1', '中医理疗', '57', '19', '张长铁', '0', '', '2000', '2020-11-13 10:41:57', '2020-11-13 00:14:12', '2020-11-13 17:04:27', '', '0', '2020-11-13 17:18:36', '63', '', '1', '1550', '0', '90941460', '', null, '0', '0', '0', '0', '', null, null, null, '0', null, '系统管理员', null, '2020-11-13 22:53:52');
INSERT INTO `aikang_wbillitem` VALUES ('369', 'aikang', '100', '5', '0', '6316052574275526', '0', '', '2', '6', '20201113', '1', '中医理疗', '49', '8', '任彩凤', '0', '', '2000', '2020-11-13 16:50:27', '2020-11-13 12:23:03', '2020-11-13 17:04:59', '', '0', '2020-11-13 19:06:50', '63', '', '1', '0', '0', '37641196', '', null, '0', '0', '0', '0', '', null, null, null, '0', null, '系统管理员', null, '2020-11-13 22:54:05');
INSERT INTO `aikang_wbillitem` VALUES ('370', 'aikang', '100', '5', '0', '6316052574275526', '0', '', '2', '6', '20201113', '3', '中医推拿', '49', '8', '任彩凤', '0', '', '2000', '2020-11-13 16:50:27', '2020-11-13 13:23:23', '2020-11-13 19:07:52', '', '0', '2020-11-13 20:16:54', '63', '', '1', '0', '0', '37641196', '', null, '32', '1', '1', '88', '', null, null, null, '0', null, '系统管理员', null, '2020-11-13 22:54:05');
INSERT INTO `aikang_wbillitem` VALUES ('371', 'aikang', '100', '5', '1', '6316052574275526', '0', '', '0', '6', '20201113', '8', '老姜足疗', '53', '12', '江红', '0', '', '2000', '2020-11-13 16:50:27', '2020-11-13 12:23:35', '2020-11-13 17:05:48', '', '0', '2020-11-13 19:06:50', '63', '', '1', '0', '0', '37641196', '', null, '0', '0', '0', '0', '', null, null, null, '0', null, '系统管理员', null, '2020-11-13 22:54:05');
INSERT INTO `aikang_wbillitem` VALUES ('372', 'aikang', '100', '5', '2', '6316052574275526', '0', '', '3', '6', '20201113', '10', '聚阳箱灸', '53', '12', '江红', '0', '', '2001', '2020-11-13 16:50:27', '2020-11-13 12:23:49', '2020-11-13 19:08:08', '', '0', '2020-11-13 20:08:10', '63', '', '1', '0', '0', '37641196', '', null, '0', '0', '0', '0', '', null, null, null, '0', null, '系统管理员', null, '2020-11-13 22:54:05');
INSERT INTO `aikang_wbillitem` VALUES ('373', 'aikang', '100', '5', '3', '6316052574275526', '0', '', '0', '6', '20201113', '4', '中药沐足', '43', '22', '张伟', '0', '', '2000', '2020-11-13 16:50:27', '2020-11-13 12:23:28', '2020-11-13 17:07:22', '', '0', '2020-11-13 19:06:50', '63', '', '1', '0', '0', '37641196', '', null, '0', '0', '0', '0', '', null, null, null, '0', null, '系统管理员', null, '2020-11-13 22:54:05');
INSERT INTO `aikang_wbillitem` VALUES ('374', 'aikang', '100', '5', '4', '6316052574275526', '0', '', '3', '6', '20201113', '3', '中医推拿', '43', '22', '张伟', '0', '', '2001', '2020-11-13 16:50:27', '2020-11-13 12:25:15', '2020-11-13 19:08:30', '', '0', '2020-11-13 20:08:30', '63', '', '1', '0', '0', '37641196', '', null, '0', '0', '0', '0', '', null, null, null, '0', null, '系统管理员', null, '2020-11-13 22:54:05');
INSERT INTO `aikang_wbillitem` VALUES ('375', 'aikang', '100', '5', '0', '6316053425221546', '0', '', '2', '6', '20201114', '5', '拔罐', '43', '22', '张伟', '0', '', '2001', '2020-11-14 16:28:42', '2020-11-14 18:36:12', '2020-11-14 16:50:00', '', '0', '2020-11-14 17:33:30', '63', '', '1', '0', '0', '19312873', '', null, '0', '0', '0', '0', '', null, null, null, '0', '006', '张伟', null, '2020-11-14 17:34:00');
INSERT INTO `aikang_wbillitem` VALUES ('376', 'aikang', '100', '6', '0', '6316053380167595', '0', '', '0', '5', '20201114', '1', '中医理疗', '56', '18', '董明武', '0', '', '2001', '2020-11-14 15:13:36', '2020-11-14 12:39:33', '2020-11-14 15:58:18', '', '0', '2020-11-14 17:33:20', '63', '', '1', '0', '0', '80286109', '', null, '0', '0', '0', '0', '', null, null, null, '0', '1018', '董明武', null, '2020-11-14 19:07:26');
INSERT INTO `aikang_wbillitem` VALUES ('377', 'aikang', '100', '6', '0', '6316053380167595', '0', '', '0', '5', '20201114', '5', '拔罐', '56', '18', '董明武', '0', '', '2001', '2020-11-14 15:13:36', '2020-11-14 13:39:53', '2020-11-14 17:55:01', '', '0', '2020-11-14 18:10:10', '63', '', '1', '0', '0', '80286109', '', null, '0', '0', '0', '0', '', null, null, null, '0', '1018', '董明武', null, '2020-11-14 19:07:26');
INSERT INTO `aikang_wbillitem` VALUES ('378', 'aikang', '100', '6', '5', '6316053380167595', '0', '', '0', '5', '20201114', '4', '中药沐足', '45', '2', '小草', '0', '', '2001', '2020-11-14 15:13:36', '2020-11-14 12:42:02', '2020-11-14 15:59:37', '', '0', '2020-11-14 17:33:30', '63', '', '1', '0', '0', '80286109', '', null, '0', '0', '0', '0', '', null, null, null, '0', '1002', '小草', null, '2020-11-14 19:10:40');
INSERT INTO `aikang_wbillitem` VALUES ('379', 'aikang', '100', '6', '5', '6316053380167595', '0', '', '0', '5', '20201114', '6', '刮痧', '45', '2', '小草', '0', '', '2001', '2020-11-14 15:13:36', '2020-11-14 13:42:22', '2020-11-14 17:55:23', '', '0', '2020-11-14 18:20:30', '63', '', '1', '0', '0', '80286109', '', null, '0', '0', '0', '0', '', null, null, null, '0', '1002', '小草', null, '2020-11-14 19:10:40');
INSERT INTO `aikang_wbillitem` VALUES ('380', 'aikang', '100', '5', '1', '6316053425221546', '0', '', '2', '6', '20201114', '3', '中医推拿', '46', '3', '三姐', '0', '', '2001', '2020-11-14 16:28:42', '2020-11-14 16:24:53', '2020-11-14 16:44:55', '', '0', '2020-11-14 17:45:20', '63', '', '1', '0', '0', '19312873', '', null, '33', '0', '1', '0', '', null, null, null, '0', '1003', '三姐', null, '2020-11-14 19:21:50');
INSERT INTO `aikang_wbillitem` VALUES ('381', 'aikang', '100', '5', '1', '6316053425221546', '0', '', '2', '6', '20201114', '2', '采耳', '46', '3', '三姐', '0', '', '2001', '2020-11-14 16:28:42', '2020-11-14 17:25:13', '2020-11-14 17:56:26', '', '0', '2020-11-14 18:21:30', '63', '', '1', '0', '0', '19312873', '', null, '28', '0', '0.5', '0', '', null, null, null, '0', '1003', '三姐', null, '2020-11-14 19:21:50');
INSERT INTO `aikang_wbillitem` VALUES ('382', 'aikang', '100', '5', '3', '6316053425221546', '0', '', '0', '6', '20201114', '4', '中药沐足', '50', '9', '黄君慧', '0', '', '2001', '2020-11-14 16:28:42', '2020-11-14 16:25:41', '2020-11-14 16:48:47', '', '0', '2020-11-14 17:48:50', '63', '', '1', '0', '0', '19312873', '', null, '34', '0', '1', '0', '', null, null, null, '0', '1009', '黄君慧', null, '2020-11-14 19:23:34');
INSERT INTO `aikang_wbillitem` VALUES ('383', 'aikang', '100', '5', '2', '6316053425221546', '0', '', '0', '6', '20201114', '10', '聚阳箱灸', '47', '5', '黄贞初', '0', '', '2001', '2020-11-14 16:28:42', '2020-11-14 16:25:30', '2020-11-14 16:49:04', '', '0', '2020-11-14 17:49:10', '63', '', '1', '0', '0', '19312873', '', null, '45', '0', '1', '0', '', null, null, null, '0', '1005', '黄贞初', null, '2020-11-14 19:24:19');
INSERT INTO `aikang_wbillitem` VALUES ('384', 'aikang', '100', '6', '1', '6316053380167595', '0', '', '2', '5', '20201114', '3', '中医推拿', '55', '16', '胡崇飞', '0', '', '2001', '2020-11-14 15:13:36', '2020-11-14 12:40:28', '2020-11-14 15:59:12', '', '0', '2020-11-14 17:33:20', '63', '', '1', '0', '0', '80286109', '', null, '32', '0', '1', '0', '', null, null, null, '0', '1016', '胡崇飞', null, '2020-11-14 19:26:38');
INSERT INTO `aikang_wbillitem` VALUES ('385', 'aikang', '100', '6', '2', '6316053380167595', '0', '', '0', '5', '20201114', '4', '中药沐足', '48', '7', '刘振霞', '0', '', '2001', '2020-11-14 15:13:36', '2020-11-14 12:41:06', '2020-11-14 16:00:00', '', '0', '2020-11-14 17:33:20', '63', '', '1', '0', '0', '80286109', '', null, '34', '0', '1', '0', '', null, null, null, '0', '1007', '刘振霞', null, '2020-11-14 19:27:46');
INSERT INTO `aikang_wbillitem` VALUES ('386', 'aikang', '100', '6', '4', '6316053380167595', '0', '', '0', '5', '20201114', '1', '中医理疗', '44', '1', '刘鹏', '0', '', '2001', '2020-11-14 15:13:36', '2020-11-14 13:07:03', '2020-11-14 16:01:53', '', '0', '2020-11-14 17:33:30', '63', '', '1', '0', '0', '80286109', '', null, '45', '0', '1', '0', '', null, null, null, '0', '1001', '刘鹏', null, '2020-11-14 19:28:21');
INSERT INTO `aikang_wbillitem` VALUES ('387', 'aikang', '100', '6', '3', '6316053380167595', '0', '', '0', '5', '20201114', '10', '聚阳箱灸', '52', '11', '罗永泽', '0', '', '2001', '2020-11-14 15:13:36', '2020-11-14 12:41:24', '2020-11-14 16:01:26', '', '0', '2020-11-14 17:33:20', '63', '', '1', '0', '0', '80286109', '', null, '45', '0', '1', '0', '', null, null, null, '0', '1011', '罗永泽', null, '2020-11-14 19:28:49');
INSERT INTO `aikang_wbillitem` VALUES ('388', 'aikang', '100', '5', '0', '6316053425221546', '0', '', '2', '6', '20201114', '3', '中医推拿', '54', '15', '陆建峰', '0', '', '2001', '2020-11-14 16:28:42', '2020-11-14 16:35:32', '2020-11-14 16:40:31', '', '0', '2020-11-14 17:45:20', '63', '', '1', '0', '0', '19312873', '', null, '33', '0', '1', '0', '', null, null, null, '0', '1015', '陆建峰', null, '2020-11-14 19:30:06');
INSERT INTO `aikang_wbillitem` VALUES ('389', 'aikang', '100', '5', '0', '6316053425221546', '0', '', '2', '6', '20201114', '7', '艾草沐足', '54', '15', '陆建峰', '0', '', '2001', '2020-11-14 16:28:42', '2020-11-14 17:35:52', '2020-11-14 17:56:05', '', '0', '2020-11-14 18:56:10', '63', '', '1', '0', '0', '19312873', '', null, '35.5', '0', '1', '0', '', null, null, null, '0', '1015', '陆建峰', null, '2020-11-14 19:30:06');
INSERT INTO `aikang_wbillitem` VALUES ('390', 'aikang', '100', '6', '4', '6316053380167595', '0', '', '0', '5', '20201114', '2', '采耳', '58', '20', '陈海涛', '0', '', '2001', '2020-11-14 15:13:36', '2020-11-14 12:41:43', '2020-11-14 16:02:40', '', '0', '2020-11-14 17:33:20', '63', '', '1', '0', '0', '80286109', '', null, '28', '0', '0.5', '0', '', null, null, null, '0', '1020', '陈海涛', null, '2020-11-14 19:32:10');
INSERT INTO `aikang_wbillitem` VALUES ('391', 'aikang', '100', '5', '4', '6316053425221546', '0', '', '0', '6', '20201114', '3', '中医推拿', '51', '10', '余玉华', '0', '', '2001', '2020-11-14 16:28:42', '2020-11-14 16:25:54', '2020-11-14 16:47:43', '', '0', '2020-11-14 17:47:50', '63', '', '1', '0', '0', '19312873', '', null, '32', '0', '1', '0', '', null, null, null, '0', '1010', '余玉华', null, '2020-11-14 19:56:40');
INSERT INTO `aikang_wbillitem` VALUES ('392', 'aikang', '100', '5', '4', '6316053425221546', '0', '', '0', '6', '20201114', '4', '中药沐足', '51', '10', '余玉华', '0', '', '2001', '2020-11-14 16:28:42', '2020-11-14 17:26:14', '2020-11-14 17:56:51', '', '0', '2020-11-14 18:57:00', '63', '', '1', '0', '0', '19312873', '', null, '34', '0', '1', '0', '', null, null, null, '0', '1010', '余玉华', null, '2020-11-14 19:56:40');
INSERT INTO `aikang_wbillitem` VALUES ('393', 'aikang', '100', '5', '4', '6316053425221546', '0', '', '0', '6', '20201114', '5', '拔罐', '51', '10', '余玉华', '0', '', '2001', '2020-11-14 16:28:42', '2020-11-14 18:51:54', '2020-11-14 19:40:53', '', '0', '2020-11-14 19:56:00', '63', '', '1', '0', '0', '19312873', '', null, '15', '0', '0.5', '0', '', null, null, null, '0', '1010', '余玉华', null, '2020-11-14 19:56:40');
INSERT INTO `aikang_wbillitem` VALUES ('394', 'aikang', '100', '5', '4', '6316053425221546', '0', '', '0', '6', '20201114', '6', '刮痧', '51', '10', '余玉华', '0', '', '2001', '2020-11-14 16:28:42', '2020-11-14 18:26:34', '2020-11-14 19:07:07', '', '0', '2020-11-14 19:32:10', '63', '', '1', '0', '0', '19312873', '', null, '22', '0', '0.75', '0', '', null, null, null, '0', '1010', '余玉华', null, '2020-11-14 19:56:40');
INSERT INTO `aikang_wbillitem` VALUES ('395', 'aikang', '100', '5', '3', '6316053551895637', '0', '', '0', '7', '20201114', '4', '中药沐足', '55', '16', '胡崇飞', '0', '', '2000', '2020-11-14 19:59:49', '2020-11-14 16:25:41', '2020-11-14 20:05:50', '', '0', '2020-11-14 21:03:34', '63', '', '1', '0', '0', '54861413', '', null, '35', '1', '1', '88', '', null, null, null, '0', '1016', '胡崇飞', null, '2020-11-14 21:15:06');
INSERT INTO `aikang_wbillitem` VALUES ('396', 'aikang', '100', '5', '1', '6316053551895637', '0', '', '2', '7', '20201115', '3', '中医推拿', '49', '8', '任彩凤', '0', '', '2001', '2020-11-14 19:59:49', '2020-11-14 16:24:53', '2020-11-14 20:10:40', '', '0', '2020-11-14 21:14:40', '63', '', '1', '0', '0', '54861413', '', null, '32', '0', '1', '0', '', null, null, null, '0', '1008', '任彩凤', null, '2020-11-15 18:06:32');
INSERT INTO `aikang_wbillitem` VALUES ('397', 'aikang', '100', '5', '1', '6316053551895637', '0', '', '2', '7', '20201115', '2', '采耳', '49', '8', '任彩凤', '0', '', '2001', '2020-11-14 19:59:49', '2020-11-14 17:25:13', '2020-11-14 21:16:25', '2020-11-14 21:16:41', '14', '2020-11-14 21:41:50', '63', '', '1', '0', '0', '54861413', '', null, '28', '0', '0.5', '0', '', null, null, null, '0', '1008', '任彩凤', null, '2020-11-15 18:06:32');
INSERT INTO `aikang_wbillitem` VALUES ('398', 'aikang', '100', '5', '2', '6316053551895637', '0', '', '0', '7', '20201115', '10', '聚阳箱灸', '53', '12', '江红', '0', '', '2001', '2020-11-14 19:59:49', '2020-11-14 16:25:30', '2020-11-14 20:06:18', '', '0', '2020-11-14 21:14:50', '63', '', '1', '0', '0', '54861413', '', null, '45', '0', '1', '0', '', null, null, null, '0', '1012', '江红', null, '2020-11-15 18:07:02');
INSERT INTO `aikang_wbillitem` VALUES ('399', 'aikang', '100', '5', '0', '6316053551895637', '0', '', '2', '7', '20201115', '3', '中医推拿', '56', '18', '董明武', '0', '', '2001', '2020-11-14 19:59:49', '2020-11-14 16:35:32', '2020-11-14 20:04:41', '', '0', '2020-11-14 21:14:40', '63', '', '1', '0', '0', '54861413', '', null, '32', '0', '1', '0', '', null, null, null, '0', '1018', '董明武', null, '2020-11-15 18:17:50');
INSERT INTO `aikang_wbillitem` VALUES ('400', 'aikang', '100', '5', '0', '6316053551895637', '0', '', '2', '7', '20201115', '7', '艾草沐足', '56', '18', '董明武', '0', '', '2001', '2020-11-14 19:59:49', '2020-11-14 17:35:52', '2020-11-14 21:18:05', '', '0', '2020-11-14 22:18:10', '63', '', '1', '0', '0', '54861413', '', null, '35', '0', '1', '0', '', null, null, null, '0', '1018', '董明武', null, '2020-11-15 18:17:50');
INSERT INTO `aikang_wbillitem` VALUES ('401', 'aikang', '100', '5', '0', '6316053551895637', '0', '', '2', '7', '20201115', '5', '拔罐', '56', '18', '董明武', '0', '', '2001', '2020-11-14 19:59:49', '2020-11-14 18:36:12', '2020-11-15 18:02:12', '', '0', '2020-11-15 18:17:20', '63', '', '1', '0', '0', '54861413', '', null, '15', '0', '0.5', '0', '', null, null, null, '0', '1018', '董明武', null, '2020-11-15 18:17:50');
INSERT INTO `aikang_wbillitem` VALUES ('402', 'aikang', '100', '5', '4', '6316053551895637', '0', '', '0', '7', '20201115', '3', '中医推拿', '57', '19', '张长铁', '0', '', '2001', '2020-11-14 19:59:49', '2020-11-14 16:25:54', '2020-11-14 20:11:16', '', '0', '2020-11-14 21:14:50', '63', '', '1', '0', '0', '54861413', '', null, '32', '0', '1', '0', '', null, null, null, '0', '1019', '张长铁', null, '2020-11-15 18:18:22');
INSERT INTO `aikang_wbillitem` VALUES ('403', 'aikang', '100', '5', '4', '6316053551895637', '0', '', '0', '7', '20201115', '4', '中药沐足', '57', '19', '张长铁', '0', '', '2001', '2020-11-14 19:59:49', '2020-11-14 17:26:14', '2020-11-14 21:18:38', '', '0', '2020-11-14 22:18:40', '63', '', '1', '0', '0', '54861413', '', null, '34', '0', '1', '0', '', null, null, null, '0', '1019', '张长铁', null, '2020-11-15 18:18:22');
INSERT INTO `aikang_wbillitem` VALUES ('404', 'aikang', '100', '5', '4', '6316053551895637', '0', '', '0', '7', '20201115', '6', '刮痧', '57', '19', '张长铁', '0', '', '2001', '2020-11-14 19:59:49', '2020-11-14 18:26:34', '2020-11-14 22:23:22', '', '0', '2020-11-15 18:00:50', '63', '', '1', '0', '0', '54861413', '', null, '22', '0', '0.75', '0', '', null, null, null, '0', '1019', '张长铁', null, '2020-11-15 18:18:22');
INSERT INTO `aikang_wbillitem` VALUES ('405', 'aikang', '100', '5', '4', '6316053551895637', '0', '', '0', '7', '20201115', '5', '拔罐', '57', '19', '张长铁', '0', '', '2001', '2020-11-14 19:59:49', '2020-11-14 18:51:54', '2020-11-15 18:02:28', '', '0', '2020-11-15 18:17:30', '63', '', '1', '0', '0', '54861413', '', null, '15', '0', '0.5', '0', '', null, null, null, '0', '1019', '张长铁', null, '2020-11-15 18:18:22');
INSERT INTO `aikang_wbillitem` VALUES ('406', 'aikang', '100', '6', '2', '6316054402057813', '0', '', '0', '3', '20201115', '4', '中药沐足', '58', '20', '陈海涛', '0', '', '2001', '2020-11-15 19:36:45', '2020-11-15 19:31:59', '2020-11-15 19:51:46', '', '0', '2020-11-15 20:51:50', '63', '', '1', '0', '0', '20452955', '', null, '34', '1', '1', '0', '', null, null, null, '0', '1020', '陈海涛', null, '2020-11-15 22:44:32');
INSERT INTO `aikang_wbillitem` VALUES ('407', 'aikang', '100', '6', '2', '6316054402057813', '0', '', '0', '3', '20201115', '2', '采耳', '58', '20', '陈海涛', '0', '', '2001', '2020-11-15 19:36:45', '2020-11-15 20:32:19', '2020-11-15 21:33:26', '', '0', '2020-11-15 22:03:40', '63', '', '1', '0', '0', '20452955', '', null, '28', '0', '0.5', '0', '', null, null, null, '0', '1020', '陈海涛', null, '2020-11-15 22:44:32');
INSERT INTO `aikang_wbillitem` VALUES ('408', 'aikang', '100', '6', '4', '6316054402057813', '0', '', '0', '3', '20201115', '3', '中医推拿', '45', '2', '小草', '0', '', '2001', '2020-11-15 19:36:45', '2020-11-15 19:35:31', '2020-11-15 19:52:53', '', '0', '2020-11-15 20:53:00', '63', '', '1', '0', '0', '20452955', '', null, '33', '0', '1', '0', '', null, null, null, '0', '1002', '小草', null, '2020-11-15 22:54:50');
INSERT INTO `aikang_wbillitem` VALUES ('409', 'aikang', '100', '6', '4', '6316054402057813', '0', '', '0', '3', '20201115', '4', '中药沐足', '45', '2', '小草', '0', '', '2001', '2020-11-15 19:36:45', '2020-11-15 20:35:51', '2020-11-15 21:32:26', '', '0', '2020-11-15 22:39:00', '63', '', '1', '0', '0', '20452955', '', null, '35', '0', '1', '0', '', null, null, null, '0', '1002', '小草', null, '2020-11-15 22:54:50');
INSERT INTO `aikang_wbillitem` VALUES ('410', 'aikang', '100', '6', '0', '6316054402057813', '0', '', '0', '3', '20201115', '1', '中医理疗', '48', '7', '刘振霞', '0', '', '2001', '2020-11-15 19:36:45', '2020-11-15 19:22:57', '2020-11-15 19:51:25', '', '0', '2020-11-15 20:51:30', '63', '', '1', '0', '0', '20452955', '', null, '45', '0', '1', '0', '', null, null, null, '0', '1007', '刘振霞', null, '2020-11-15 22:56:04');
INSERT INTO `aikang_wbillitem` VALUES ('411', 'aikang', '100', '6', '0', '6316054402057813', '0', '', '0', '3', '20201115', '5', '拔罐', '46', '3', '三姐', '0', '', '2001', '2020-11-15 19:36:45', '2020-11-15 20:23:17', '2020-11-15 19:49:04', '', '0', '2020-11-15 20:04:10', '63', '', '1', '300', '0', '20452955', '', null, '15', '0', '0.5', '3', '', null, null, null, '0', '1003', '三姐', null, '2020-11-15 22:58:15');
INSERT INTO `aikang_wbillitem` VALUES ('412', 'aikang', '100', '6', '1', '6316054402057813', '0', '', '2', '3', '20201115', '10', '聚阳箱灸', '52', '11', '罗永泽', '0', '', '2001', '2020-11-15 19:36:45', '2020-11-15 19:31:32', '2020-11-15 19:53:27', '', '0', '2020-11-15 20:53:30', '63', '', '1', '1500', '0', '20452955', '', null, '45', '0', '1', '15', '', null, null, null, '0', '1011', '罗永泽', null, '2020-11-15 22:59:03');
INSERT INTO `aikang_wbillitem` VALUES ('413', 'aikang', '100', '6', '3', '6316054402057813', '0', '', '0', '3', '20201116', '3', '中医推拿', '44', '1', '刘鹏', '0', '', '2001', '2020-11-15 19:36:45', '2020-11-15 19:32:43', '2020-11-15 19:55:33', '', '0', '2020-11-15 20:55:40', '63', '', '1', '8800', '0', '20452955', '', null, '32', '0', '1', '0', '', null, null, null, '0', '1001', '刘鹏', null, '2020-11-16 15:01:23');
INSERT INTO `aikang_wbillitem` VALUES ('414', 'aikang', '100', '3', '0', '6316054420154864', '0', '', '0', '4', '20201116', '1', '中医理疗', '51', '10', '余玉华', '0', '', '2001', '2020-11-15 20:06:55', '2020-11-15 20:05:55', '2020-11-15 20:08:21', '', '0', '2020-11-15 21:08:30', '63', '', '1', '1200', '0', '27438170', '', null, '45', '0', '1', '0', '', null, null, null, '0', '1010', '余玉华', null, '2020-11-16 15:04:40');
INSERT INTO `aikang_wbillitem` VALUES ('415', 'aikang', '100', '3', '1', '6316054420154864', '0', '', '0', '4', '20201116', '3', '中医推拿', '47', '5', '黄贞初', '0', '', '2001', '2020-11-15 20:06:55', '2020-11-15 20:06:09', '2020-11-15 20:08:04', '', '0', '2020-11-15 21:08:10', '63', '', '1', '12600', '0', '27438170', '', null, '32', '0', '1', '0', '', null, null, null, '0', '1005', '黄贞初', null, '2020-11-16 15:04:57');
INSERT INTO `aikang_wbillitem` VALUES ('416', 'aikang', '100', '6', '5', '6316054402057813', '0', '', '0', '3', '20201116', '8', '老姜足疗', '54', '15', '陆建峰', '0', '', '2001', '2020-11-15 19:36:45', '2020-11-15 19:35:49', '2020-11-15 19:56:29', '', '0', '2020-11-15 20:56:30', '63', '', '1', '8600', '0', '20452955', '', null, '35', '0', '1', '0', '', null, null, null, '0', '1015', '陆建峰', null, '2020-11-16 15:09:17');
INSERT INTO `aikang_wbillitem` VALUES ('417', 'aikang', '100', '3', '2', '6316054420154864', '0', '', '0', '4', '20201116', '7', '艾草沐足', '50', '9', '黄君慧', '0', '', '2001', '2020-11-15 20:06:55', '2020-11-15 20:06:27', '2020-11-15 20:07:34', '', '0', '2020-11-15 21:07:40', '63', '', '1', '100', '0', '27438170', '', null, '35', '0', '1', '0', '', null, null, null, '0', '1009', '黄君慧', null, '2020-11-16 15:09:24');
INSERT INTO `aikang_wbillitem` VALUES ('418', 'aikang', '100', '2', '1', '6316055106133262', '0', '', '0', '2', '20201116', '4', '中药沐足', '56', '18', '董明武', '0', '', '2001', '2020-11-16 15:10:13', '2020-11-16 10:16:49', '2020-11-16 15:26:49', '', '0', '2020-11-16 20:16:00', '63', '', '1', '0', '0', '34208420', '', null, '34', '0', '1', '88', '', null, null, null, '0', '1018', '董明武', null, '2020-11-16 20:40:29');
INSERT INTO `aikang_wbillitem` VALUES ('419', 'aikang', '100', '2', '1', '6316055106133262', '0', '', '0', '2', '20201116', '6', '刮痧', '56', '18', '董明武', '0', '', '500', '2020-11-16 15:10:13', '2020-11-16 11:17:09', '2020-11-16 20:16:35', '', '0', '', '63', '', '1', '0', '0', '34208420', '', null, '23', '0', '0.75', '50', '', null, null, null, '0', '1018', '董明武', null, '2020-11-16 20:40:29');
INSERT INTO `aikang_wbillitem` VALUES ('420', 'aikang', '100', '2', '0', '6316055106133262', '0', '', '0', '2', '20201116', '1', '中医理疗', '43', '22', '张伟', '0', '', '2001', '2020-11-16 15:10:13', '2020-11-16 10:16:36', '2020-11-16 15:26:28', '', '0', '2020-11-16 20:16:00', '63', '', '1', '0', '0', '34208420', '', null, '48', '0', '1', '126', '', null, null, null, '0', '006', '张伟', null, '2020-11-16 20:41:02');
INSERT INTO `aikang_wbillitem` VALUES ('421', 'aikang', '100', '1', '0', '6316056015611281', '0', '', '0', '1', '20201117', '5', '拔罐', '55', '16', '胡崇飞', '0', '', '2001', '2020-11-17 16:26:01', '2020-11-17 16:26:13', '2020-11-17 16:28:10', '', '0', '2020-11-17 16:43:10', '63', '', '1', '0', '0', '77899935', '', null, '15', '0', '0.5', '35', '', null, null, null, '0', '1016', '胡崇飞', null, '2020-11-17 16:43:37');
INSERT INTO `aikang_wbillitem` VALUES ('422', 'aikang', '100', '2', '0', '6316056027057743', '0', '', '0', '3', '20201120', '5', '拔罐', '46', '3', '三姐', '0', '', '2001', '2020-11-17 16:45:05', '2020-11-17 16:45:00', '2020-11-17 16:47:43', '2020-11-17 16:48:00', '9', '2020-11-17 17:03:00', '63', '', '1', '0', '0', '05002495', '', null, '15', '0', '0.5', '35', '', null, null, null, '0', '1003', '三姐', null, '2020-11-20 19:30:21');
INSERT INTO `aikang_wbillitem` VALUES ('423', 'aikang', '100', '3', '0', '6316056018338042', '0', '', '0', '2', '20201120', '3', '中医推拿', '49', '8', '任彩凤', '0', '', '2001', '2020-11-17 16:30:33', '2020-11-17 16:30:06', '2020-11-17 16:31:34', '', '0', '2020-11-17 17:31:40', '63', '', '1', '0', '0', '12124332', '', null, '32', '0', '1', '88', '', null, null, null, '0', '1008', '任彩凤', null, '2020-11-20 19:30:36');
INSERT INTO `aikang_wbillitem` VALUES ('424', 'aikang', '100', '3', '1', '6316056018338042', '0', '', '0', '2', '20201120', '4', '中药沐足', '53', '12', '江红', '0', '', '2001', '2020-11-17 16:30:33', '2020-11-17 16:30:34', '2020-11-17 16:31:53', '', '0', '2020-11-17 17:32:00', '63', '', '1', '0', '0', '12124332', '', null, '34', '0', '1', '88', '', null, null, null, '0', '1012', '江红', null, '2020-11-20 19:32:46');
INSERT INTO `aikang_wbillitem` VALUES ('425', 'aikang', '100', '3', '2', '6316056018338042', '0', '', '0', '2', '20201120', '6', '刮痧', '57', '19', '张长铁', '0', '', '2001', '2020-11-17 16:30:33', '2020-11-17 16:30:48', '2020-11-17 16:32:12', '', '0', '2020-11-17 16:57:20', '63', '', '1', '0', '0', '12124332', '', null, '22', '0', '0.75', '50', '', null, null, null, '0', '1019', '张长铁', null, '2020-11-20 19:32:59');
INSERT INTO `aikang_wbillitem` VALUES ('426', 'aikang', '100', '2', '1', '6316056027057743', '0', '', '0', '3', '20201120', '5', '拔罐', '55', '16', '胡崇飞', '0', '', '2001', '2020-11-17 16:45:05', '2020-11-17 17:10:29', '2020-11-20 19:33:09', '', '0', '2020-11-20 20:03:10', '63', '', '1', '0', '0', '05002495', '', null, '15', '0', '0.5', '35', '', null, null, null, '0', '1016', '胡崇飞', null, '2020-11-20 20:25:23');
INSERT INTO `aikang_wbillitem` VALUES ('427', 'aikang', '100', '2', '1', '6316056027057743', '0', '', '0', '3', '20201120', '6', '刮痧', '55', '16', '胡崇飞', '0', '', '2001', '2020-11-17 16:45:05', '2020-11-17 16:45:09', '2020-11-17 16:47:12', '', '0', '2020-11-17 17:12:20', '63', '', '1', '0', '0', '05002495', '', null, '22', '0', '0.75', '50', '', null, null, null, '0', '1016', '胡崇飞', null, '2020-11-20 20:25:23');
INSERT INTO `aikang_wbillitem` VALUES ('428', 'aikang', '100', '2', '0', '6316058752926801', '0', '', '0', '1', '20201120', '3', '中医推拿', '44', '1', '刘鹏', '0', '', '500', '2020-11-20 20:28:12', '2020-11-20 20:26:35', '2020-11-20 20:38:11', '2020-11-20 21:26:48', '7', '', '63', '', '1', '0', '0', '19534212', '', null, '32', '0', '1', '88', '', null, null, null, '0', '1001', '刘鹏', null, '2020-11-20 21:29:52');
INSERT INTO `aikang_wbillitem` VALUES ('429', 'aikang', '100', '2', '1', '6316058752926801', '0', '', '0', '1', '20201120', '3', '中医推拿', '57', '19', '张长铁', '0', '', '2001', '2020-11-20 20:28:12', '2020-11-20 20:26:41', '2020-11-20 20:32:40', '', '0', '2020-11-20 21:39:10', '63', '', '1', '0', '0', '19534212', '', null, '32', '0', '1', '88', '', null, null, null, '0', '1019', '张长铁', null, '2020-11-20 21:58:26');
INSERT INTO `aikang_wbillitem` VALUES ('430', 'aikang', '100', '2', '1', '6316058752926801', '0', '', '0', '1', '20201120', '6', '刮痧', '57', '19', '张长铁', '0', '', '500', '2020-11-20 20:28:12', '2020-11-20 21:27:01', '2020-11-20 21:40:29', '', '0', '', '63', '', '1', '0', '0', '19534212', '', null, '22', '0', '0.75', '50', '', null, null, null, '0', '1019', '张长铁', null, '2020-11-20 21:58:26');
INSERT INTO `aikang_wbillitem` VALUES ('431', 'aikang', '100', '5', '1', '6316058773805673', '0', '', '0', '3', '20201120', '8', '老姜足疗', '45', '2', '小草', '0', '', '2001', '2020-11-20 21:03:00', '2020-11-20 20:40:51', '2020-11-20 21:13:15', '', '0', '2020-11-20 22:13:20', '63', '', '1', '0', '0', '48226697', '', null, '36', '0', '1', '88', '', null, null, null, '0', '1002', '小草', null, '2020-11-20 23:31:11');
INSERT INTO `aikang_wbillitem` VALUES ('432', 'aikang', '100', '5', '4', '6316058773805673', '0', '', '0', '3', '20201120', '8', '老姜足疗', '43', '22', '张伟', '0', '', '2001', '2020-11-20 21:03:00', '2020-11-20 20:41:01', '2020-11-20 21:13:30', '', '0', '2020-11-20 22:13:30', '63', '', '1', '0', '0', '48226697', '', null, '38', '0', '1', '88', '', null, null, null, '0', '006', '张伟', null, '2020-11-20 23:45:00');
INSERT INTO `aikang_wbillitem` VALUES ('433', 'aikang', '100', '5', '4', '6316058773805673', '0', '', '0', '3', '20201120', '5', '拔罐', '43', '22', '张伟', '0', '', '500', '2020-11-20 21:03:00', '2020-11-20 21:41:21', '2020-11-20 23:31:34', '', '0', '', '63', '', '1', '0', '0', '48226697', '', null, '15', '0', '0.5', '35', '', null, null, null, '0', '006', '张伟', null, '2020-11-20 23:45:00');
INSERT INTO `aikang_wbillitem` VALUES ('434', 'aikang', '100', '5', '3', '6316058773805673', '0', '', '0', '3', '20201120', '8', '老姜足疗', '57', '19', '张长铁', '0', '', '2001', '2020-11-20 21:03:00', '2020-11-20 20:40:59', '2020-11-20 22:43:32', '', '0', '2020-11-20 23:43:40', '63', '', '1', '0', '0', '48226697', '', null, '35', '0', '1', '88', '', null, null, null, '0', '1019', '张长铁', null, '2020-11-20 23:45:27');
INSERT INTO `aikang_wbillitem` VALUES ('435', 'aikang', '100', '5', '0', '6316058773805673', '0', '', '0', '3', '20201120', '3', '中医推拿', '47', '5', '黄贞初', '0', '', '2001', '2020-11-20 21:03:00', '2020-11-20 20:40:36', '2020-11-20 21:12:58', '', '0', '2020-11-20 22:13:00', '63', '', '1', '0', '0', '48226697', '', null, '32', '0', '1', '88', '', null, null, null, '0', '1005', '黄贞初', null, '2020-11-21 00:53:24');
INSERT INTO `aikang_wbillitem` VALUES ('436', 'aikang', '100', '5', '2', '6316058773805673', '0', '', '0', '3', '20201120', '8', '老姜足疗', '47', '5', '黄贞初', '0', '', '2001', '2020-11-20 21:03:00', '2020-11-20 20:40:56', '2020-11-20 23:30:30', '', '0', '2020-11-21 00:50:20', '63', '', '1', '0', '0', '48226697', '', null, '35', '0', '1', '88', '', null, null, null, '0', '1005', '黄贞初', null, '2020-11-21 00:53:24');
INSERT INTO `aikang_wbillitem` VALUES ('437', 'aikang', '100', '5', '0', '6316058773805673', '0', '', '0', '3', '20201120', '6', '刮痧', '47', '5', '黄贞初', '0', '', '2001', '2020-11-20 21:03:00', '2020-11-20 21:40:56', '2020-11-20 22:44:10', '', '0', '2020-11-20 23:29:50', '63', '', '1', '0', '0', '48226697', '', null, '22', '0', '0.75', '50', '', null, null, null, '0', '1005', '黄贞初', null, '2020-11-21 00:53:24');
INSERT INTO `aikang_wbillitem` VALUES ('438', 'aikang', '100', '5', '3', '6316058876242704', '0', '', '0', '4', '20201121', '7', '艾草沐足', '45', '2', '小草', '0', '', '2001', '2020-11-20 23:53:44', '2020-11-20 23:49:10', '2020-11-21 00:57:41', '', '0', '2020-11-21 09:41:00', '63', '', '1', '0', '0', '84457037', '', null, '36', '0', '1', '88', '', null, null, null, '0', '1002', '小草', null, '2020-11-21 09:52:23');
INSERT INTO `aikang_wbillitem` VALUES ('439', 'aikang', '100', '5', '4', '6316058876242704', '0', '', '0', '4', '20201121', '6', '刮痧', '47', '5', '黄贞初', '0', '', '2001', '2020-11-20 23:53:44', '2020-11-20 23:49:18', '2020-11-21 00:57:54', '', '0', '2020-11-21 09:41:00', '63', '', '1', '0', '0', '84457037', '', null, '22', '0', '0.75', '50', '', null, null, null, '0', '1005', '黄贞初', null, '2020-11-21 09:52:37');
INSERT INTO `aikang_wbillitem` VALUES ('440', 'aikang', '100', '5', '2', '6316058876242704', '0', '', '0', '4', '20201121', '3', '中医推拿', '43', '22', '张伟', '0', '', '2001', '2020-11-20 23:53:44', '2020-11-20 23:49:00', '2020-11-21 00:57:29', '', '0', '2020-11-21 09:41:00', '63', '', '1', '0', '0', '84457037', '', null, '35', '0', '1', '88', '', null, null, null, '0', '006', '张伟', null, '2020-11-21 09:52:47');
INSERT INTO `aikang_wbillitem` VALUES ('441', 'aikang', '100', '5', '0', '6316058876242704', '0', '', '0', '4', '20201121', '3', '中医推拿', '44', '1', '刘鹏', '0', '', '2001', '2020-11-20 23:53:44', '2020-11-20 23:48:23', '2020-11-21 00:58:29', '', '0', '2020-11-21 09:41:00', '63', '', '1', '0', '0', '84457037', '', null, '32', '0', '1', '88', '', null, null, null, '0', '1001', '刘鹏', null, '2020-11-21 10:06:14');
INSERT INTO `aikang_wbillitem` VALUES ('442', 'aikang', '100', '5', '0', '6316058876242704', '0', '', '0', '4', '20201121', '5', '拔罐', '44', '1', '刘鹏', '0', '', '500', '2020-11-20 23:53:44', '2020-11-21 00:48:43', '2020-11-21 09:52:06', '', '0', '', '63', '', '1', '0', '0', '84457037', '', null, '15', '0', '0.5', '35', '', null, null, null, '0', '1001', '刘鹏', null, '2020-11-21 10:06:14');
INSERT INTO `aikang_wbillitem` VALUES ('443', 'aikang', '100', '5', '1', '6316058876242704', '0', '', '0', '4', '20201121', '2', '采耳', '57', '19', '张长铁', '0', '', '2001', '2020-11-20 23:53:44', '2020-11-20 23:48:44', '2020-11-21 00:57:13', '', '0', '2020-11-21 09:41:00', '63', '', '1', '0', '0', '84457037', '', null, '28', '0', '0.5', '50', '', null, null, null, '0', '1019', '张长铁', null, '2020-11-21 10:58:15');
INSERT INTO `aikang_wbillitem` VALUES ('444', 'aikang', '100', '5', '1', '6316058876242704', '0', '', '0', '4', '20201121', '1', '中医理疗', '57', '19', '张长铁', '0', '', '2001', '2020-11-20 23:53:44', '2020-11-21 00:14:04', '2020-11-21 09:52:15', '', '0', '2020-11-21 10:52:20', '63', '', '1', '0', '0', '84457037', '', null, '45', '0', '1', '126', '', null, null, null, '0', '1019', '张长铁', null, '2020-11-21 10:58:15');
INSERT INTO `aikang_wbillitem` VALUES ('445', 'aikang', '100', '2', '0', '631606903695006ypw', '0', '', '0', '2', '20201202', '3', '中医推拿', '57', '19', '张长铁', '0', '', '2000', '2020-12-02 18:16:29', '2020-12-02 18:08:06', '2020-12-02 18:22:14', '', '0', '2020-12-02 20:51:53', '63', '', '1', '0', '0', '37397666', '', null, '32', '1', '1', '88', '', null, null, null, '0', '1019', '张长铁', null, '2020-12-03 00:13:41');
INSERT INTO `aikang_wbillitem` VALUES ('446', 'aikang', '100', '2', '0', '631606903695006ypw', '0', '', '0', '2', '20201202', '5', '拔罐', '57', '19', '张长铁', '0', '', '2000', '2020-12-02 18:16:29', '2020-12-02 19:08:26', '2020-12-02 20:51:54', '', '0', '2020-12-02 21:28:30', '63', '', '1', '0', '0', '37397666', '', null, '15', '1', '0.5', '35', '', null, null, null, '0', '1019', '张长铁', null, '2020-12-03 00:13:41');
INSERT INTO `aikang_wbillitem` VALUES ('447', 'aikang', '100', '0', '0', '631606903695006ypw', '0', '', '0', '2', '20201202', '3', '中医推拿', '57', '19', '张长铁', '0', '', '500', '2020-12-02 19:00:13', '2020-12-02 19:23:46', '2020-12-02 21:28:33', '', '0', '', '63', '', '1', '0', '0', '37397666', '', null, '16', '0', '0.5', '44', '', null, null, null, '0', '1019', '张长铁', null, '2020-12-03 00:13:41');
INSERT INTO `aikang_wbillitem` VALUES ('448', 'aikang', '100', '2', '1', '631606903695006ypw', '0', '', '2', '2', '20201203', '1', '中医理疗', '52', '11', '罗永泽', '0', '', '2000', '2020-12-02 18:16:29', '2020-12-02 18:08:20', '2020-12-02 18:22:30', '', '0', '2020-12-02 20:51:23', '63', '', '1', '0', '0', '37397666', '', null, '45', '1', '1', '126', '', null, null, null, '0', '1011', '罗永泽', null, '2020-12-03 10:52:31');
INSERT INTO `aikang_wbillitem` VALUES ('449', 'aikang', '100', '2', '1', '631606903695006ypw', '0', '', '2', '2', '20201203', '8', '老姜足疗', '52', '11', '罗永泽', '0', '', '2000', '2020-12-02 18:16:29', '2020-12-02 19:08:40', '2020-12-02 20:51:25', '', '0', '2020-12-03 00:13:23', '63', '', '1', '0', '0', '37397666', '', null, '35', '1', '1', '88', '', null, null, null, '0', '1011', '罗永泽', null, '2020-12-03 10:52:31');
INSERT INTO `aikang_wbillitem` VALUES ('450', 'aikang', '100', '0', '1', '631606903695006ypw', '0', '', '2', '2', '20201203', '6', '刮痧', '52', '11', '罗永泽', '0', '', '500', '2020-12-02 19:03:51', '2020-12-02 20:09:00', '2020-12-03 00:13:24', '', '0', '', '63', '', '1', '0', '0', '37397666', '', null, '22', '0', '0.75', '50', '', null, null, null, '0', '1011', '罗永泽', null, '2020-12-03 10:52:31');
INSERT INTO `aikang_wbillitem` VALUES ('451', 'aikang', '100', '2', '1', '631606966324861f5t', '0', '', '0', '1', '20201203', '5', '拔罐', '47', '5', '黄贞初', '0', '', '2001', '2020-12-03 11:32:46', '2020-12-03 11:32:19', '2020-12-03 11:34:32', '', '0', '2020-12-03 11:50:00', '63', '', '1', '0', '0', '87030911', '', null, '15', '0', '0.5', '35', '', null, null, null, '0', '1005', '黄贞初', null, '2020-12-03 11:58:15');
INSERT INTO `aikang_wbillitem` VALUES ('452', 'aikang', '100', '2', '0', '631606966324861f5t', '0', '', '0', '1', '20201203', '5', '拔罐', '44', '1', '刘鹏', '0', '', '2001', '2020-12-03 11:32:46', '2020-12-03 11:32:12', '2020-12-03 11:34:23', '', '0', '2020-12-03 11:49:30', '63', '', '1', '0', '0', '87030911', '', null, '15', '0', '0.5', '35', '', null, null, null, '0', '1001', '刘鹏', null, '2020-12-03 11:58:52');
INSERT INTO `aikang_wbillitem` VALUES ('453', 'aikang', '100', '2', '1', '631606977673148KjX', '0', '', '0', '2', '20201203', '5', '拔罐', '58', '20', '陈海涛', '0', '', '2001', '2020-12-03 14:41:43', '2020-12-03 14:41:28', '2020-12-03 14:43:32', '', '0', '2020-12-03 14:59:00', '63', '', '1', '0', '0', '56299596', '', null, '15', '0', '0.5', '35', '', null, null, null, '0', '1020', '陈海涛', null, '2020-12-03 15:42:06');
INSERT INTO `aikang_wbillitem` VALUES ('478', 'aikang', '100', '2', '0', '631606977673148KjX', '0', '', '0', '2', '20201203', '5', '拔罐', '46', '3', '三姐', '0', '', '2001', '2020-12-03 14:41:43', '2020-12-03 14:41:24', '2020-12-03 14:43:12', '', '0', '2020-12-03 14:58:30', '63', '', '1', '0', '0', '56299596', '', null, '15', '0', '0.5', '35', '', null, null, null, '0', '1003', '三姐', null, '2020-12-03 17:26:06');
INSERT INTO `aikang_wbillitem` VALUES ('479', 'aikang', '100', '3', '0', '631606987706194pX4', '0', '', '0', '5', '20201203', '5', '拔罐', '58', '20', '陈海涛', '0', '', '2001', '2020-12-03 17:29:58', '2020-12-03 17:28:22', '2020-12-03 17:31:14', '', '0', '2020-12-03 17:46:30', '63', '', '1', '0', '0', '07181291', '', null, '15', '0', '0.5', '35', '', null, null, null, '0', '1020', '陈海涛', null, '2020-12-03 17:48:37');
INSERT INTO `aikang_wbillitem` VALUES ('480', 'aikang', '100', '3', '1', '631606987706194pX4', '0', '', '0', '5', '20201203', '5', '拔罐', '44', '1', '刘鹏', '0', '', '2001', '2020-12-03 17:29:58', '2020-12-03 17:28:34', '2020-12-03 17:30:51', '', '0', '2020-12-03 17:46:00', '63', '', '1', '0', '0', '07181291', '', null, '15', '0', '0.5', '35', '', null, null, null, '0', '1001', '刘鹏', null, '2020-12-03 17:48:47');
INSERT INTO `aikang_wbillitem` VALUES ('481', 'aikang', '100', '3', '2', '631606987706194pX4', '0', '', '0', '5', '20201203', '5', '拔罐', '51', '10', '余玉华', '0', '', '2001', '2020-12-03 17:29:58', '2020-12-03 17:28:40', '2020-12-03 17:31:06', '', '0', '2020-12-03 17:46:30', '63', '', '1', '0', '0', '07181291', '', null, '15', '0', '0.5', '35', '', null, null, null, '0', '1010', '余玉华', null, '2020-12-03 17:49:10');
INSERT INTO `aikang_wbillitem` VALUES ('482', 'aikang', '100', '3', '0', '631607161707580NG6', '0', '', '0', '1', '20201208', '5', '拔罐', '47', '5', '黄贞初', '0', '', '2001', '2020-12-07 23:26:56', '2020-12-05 18:46:51', '2020-12-08 10:56:44', '', '0', '2020-12-08 11:12:00', '63', '', '1', '0', '0', '15898218', '', null, '15', '0', '0.5', '35', '', null, null, null, '0', '1005', '黄贞初', null, '2020-12-08 12:30:08');
INSERT INTO `aikang_wbillitem` VALUES ('483', 'aikang', '100', '3', '1', '631607161707580NG6', '0', '', '0', '1', '20201208', '3', '中医推拿', '51', '10', '余玉华', '0', '', '2001', '2020-12-07 23:26:56', '2020-12-05 17:46:59', '2020-12-08 10:55:56', '', '0', '2020-12-08 11:56:00', '63', '', '1', '0', '0', '15898218', '', null, '32', '0', '1', '86', '', null, null, null, '0', '1010', '余玉华', null, '2020-12-08 18:29:38');
INSERT INTO `aikang_wbillitem` VALUES ('484', 'aikang', '100', '0', '2', '631607161707580NG6', '0', '', '0', '1', '20201211', '3', '中医推拿', '45', '2', '小草', '0', '', '2001', '2020-12-08 12:31:05', '2020-12-08 13:31:38', '2020-12-08 15:20:03', '', '0', '2020-12-08 16:20:30', '63', '', '1', '0', '0', '15898218', '', null, '33', '0', '1', '88', '', null, null, null, '0', '1002', '小草', null, '2020-12-11 22:51:00');
INSERT INTO `aikang_wbillitem` VALUES ('485', 'aikang', '100', '0', '2', '631607161707580NG6', '0', '', '0', '1', '20201211', '4', '中药沐足', '45', '2', '小草', '0', '', '2001', '2020-12-08 12:31:29', '2020-12-08 14:31:58', '2020-12-08 16:56:11', '', '0', '2020-12-08 17:56:30', '63', '', '1', '0', '0', '15898218', '', null, '35', '0', '1', '88', '', null, null, null, '0', '1002', '小草', null, '2020-12-11 22:51:00');
INSERT INTO `aikang_wbillitem` VALUES ('486', 'aikang', '100', '0', '2', '631607161707580NG6', '0', '', '0', '1', '20201211', '4', '中药沐足', '45', '2', '小草', '0', '', '2001', '2020-12-08 12:32:36', '2020-12-08 15:57:38', '2020-12-08 18:24:59', '', '0', '2020-12-11 20:29:30', '63', '', '1', '0', '0', '15898218', '', null, '35', '0', '1', '88', '', null, null, null, '0', '1002', '小草', null, '2020-12-11 22:51:00');
INSERT INTO `aikang_wbillitem` VALUES ('487', 'aikang', '100', '3', '2', '631607161707580NG6', '0', '', '0', '1', '20201211', '7', '艾草沐足', '45', '2', '小草', '0', '', '2001', '2020-12-07 23:26:56', '2020-12-05 17:48:44', '2020-12-08 10:55:40', '', '0', '2020-12-08 11:56:00', '63', '', '1', '0', '0', '15898218', '', null, '36', '0', '1', '86', '', null, null, null, '0', '1002', '小草', null, '2020-12-11 22:51:00');
INSERT INTO `aikang_wbillitem` VALUES ('488', 'aikang', '100', '0', '2', '631607161707580NG6', '0', '', '0', '1', '20201211', '7', '艾草沐足', '45', '2', '小草', '0', '', '2001', '2020-12-08 12:30:59', '2020-12-08 12:31:18', '2020-12-08 13:35:08', '', '0', '2020-12-08 15:19:00', '63', '', '1', '0', '0', '15898218', '', null, '36', '0', '1', '88', '', null, null, null, '0', '1002', '小草', null, '2020-12-11 22:51:00');
INSERT INTO `aikang_wbillitem` VALUES ('489', 'aikang', '100', '0', '2', '631607161707580NG6', '0', '', '0', '1', '20201211', '6', '刮痧', '45', '2', '小草', '0', '', '2001', '2020-12-08 00:31:10', '2020-12-08 00:31:28', '2020-12-08 12:30:19', '', '0', '2020-12-08 12:30:30', '63', '', '1', '0', '0', '15898218', '', null, '22', '0', '0.75', '46', '', null, null, null, '0', '1002', '小草', null, '2020-12-11 22:51:00');
INSERT INTO `aikang_wbillitem` VALUES ('490', 'aikang', '100', '0', '2', '631607161707580NG6', '0', '', '0', '1', '20201211', '6', '刮痧', '45', '2', '小草', '0', '', '2001', '2020-12-08 12:31:47', '2020-12-08 15:32:18', '2020-12-08 17:58:53', '', '0', '2020-12-08 18:24:00', '63', '', '1', '0', '0', '15898218', '', null, '22', '0', '0.75', '50', '', null, null, null, '0', '1002', '小草', null, '2020-12-11 22:51:00');
INSERT INTO `aikang_wbillitem` VALUES ('491', 'aikang', '100', '3', '0', '631607161707580NG6', '0', '', '0', '1', '20201211', '1', '中医理疗', '48', '7', '刘振霞', '0', '', '2001', '2020-12-07 23:26:56', '2020-12-05 17:46:31', '2020-12-08 10:56:21', '', '0', '2020-12-08 12:26:30', '63', '', '1', '0', '0', '15898218', '', null, '67.5', '0', '1.5', '189', '', null, null, null, '0', '1007', '刘振霞', null, '2020-12-11 22:51:24');
INSERT INTO `aikang_wbillitem` VALUES ('492', 'aikang', '100', '0', '0', '631607161707580NG6', '0', '', '0', '1', '20201211', '3', '中医推拿', '48', '7', '刘振霞', '0', '', '2000', '2020-12-08 12:32:10', '2020-12-08 12:32:29', '2020-12-08 17:01:48', '', '0', '2020-12-08 17:59:06', '63', '', '1', '0', '0', '15898218', '', null, '32', '1', '1', '88', '', null, null, null, '0', '1007', '刘振霞', null, '2020-12-11 22:51:24');
INSERT INTO `aikang_wbillitem` VALUES ('493', 'aikang', '100', '0', '0', '631607161707580NG6', '0', '', '0', '1', '20201211', '4', '中药沐足', '48', '7', '刘振霞', '0', '', '2001', '2020-12-08 12:32:19', '2020-12-08 13:32:49', '2020-12-08 17:59:07', '', '0', '2020-12-11 20:29:30', '63', '', '1', '0', '0', '15898218', '', null, '34', '0', '1', '88', '', null, null, null, '0', '1007', '刘振霞', null, '2020-12-11 22:51:24');
INSERT INTO `aikang_wbillitem` VALUES ('494', 'aikang', '100', '3', '1', '631608280340584S8w', '0', '', '0', '1', '20201222', '6', '刮痧', '51', '10', '余玉华', '0', '', '2001', '2020-12-18 16:36:43', '2020-12-18 16:31:34', '2020-12-18 16:43:58', '', '0', '2020-12-18 17:09:00', '63', '', '1', '0', '0', '55109900', '', null, '22', '0', '0.75', '50', '', null, null, null, '0', '1010', '余玉华', null, '2020-12-22 16:30:08');
INSERT INTO `aikang_wbillitem` VALUES ('495', 'aikang', '100', '3', '2', '631608280340584S8w', '0', '', '0', '1', '20201222', '4', '中药沐足', '45', '2', '小草', '0', '', '2001', '2020-12-18 16:36:43', '2020-12-18 16:32:37', '2020-12-18 16:44:28', '', '0', '2020-12-18 17:44:30', '63', '', '1', '0', '0', '55109900', '', null, '35', '0', '1', '88', '', null, null, null, '0', '1002', '小草', null, '2020-12-22 16:30:18');
INSERT INTO `aikang_wbillitem` VALUES ('496', 'aikang', '100', '3', '0', '631608280340584S8w', '0', '', '0', '1', '20201222', '3', '中医推拿', '48', '7', '刘振霞', '0', '', '2001', '2020-12-18 16:36:43', '2020-12-18 16:31:23', '2020-12-18 16:43:32', '', '0', '2020-12-18 17:44:00', '63', '', '1', '0', '0', '55109900', '', null, '32', '0', '1', '88', '', null, null, null, '0', '1007', '刘振霞', null, '2020-12-22 22:33:32');
INSERT INTO `aikang_wbillitem` VALUES ('497', 'aikang', '100', '3', '0', '631608280340584S8w', '0', '', '0', '1', '20201222', '4', '中药沐足', '48', '7', '刘振霞', '0', '', '2001', '2020-12-18 16:36:43', '2020-12-18 17:31:43', '2020-12-22 16:28:54', '', '0', '2020-12-22 17:29:00', '63', '', '1', '0', '0', '55109900', '', null, '34', '0', '1', '88', '', null, null, null, '0', '1007', '刘振霞', null, '2020-12-22 22:33:32');
INSERT INTO `aikang_wbillitem` VALUES ('498', 'aikang', '0', '0', '0', '686816082821206702', '3', '205', '0', '2', '20201224', '3', '中医推拿', '50', '9', '黄君慧', '0', '', '2000', '2020-12-18 17:02:00', '2020-12-18 17:04:56', '2020-12-18 17:58:37', '', '0', '2020-12-22 16:18:14', '0', '', '0', '0', '0', '99494744', '', null, '3024', '94.5', '94.5', '8316', '原价', null, null, null, '0', null, '系统管理员', null, '2020-12-24 20:34:30');
INSERT INTO `aikang_wbillitem` VALUES ('501', 'aikang', '62', '0', '0', '686816082821206702', '1', '20001', '0', '2', '20201225', '3', '中医推拿', '54', '15', '陆建峰', '0', '', '2000', '2020-12-18 17:02:00', '2020-12-18 17:04:29', '2020-12-18 17:58:12', '', '0', '2020-12-22 16:18:23', '0', '', '0', '0', '0', '85963954', '', null, '3118.5', '94.5', '94.5', '7484.400000000001', '原价', '2', '刘仁飞', '11608123714263000enfTEx2x', '0', null, '系统管理员', null, '2020-12-25 13:46:54');
INSERT INTO `aikang_wbillitem` VALUES ('502', 'aikang', '62', '0', '1', '686816082821206702', '1', '20001', '0', '2', '20201225', '6', '刮痧', '54', '15', '陆建峰', '0', '', '2000', '2020-12-18 17:02:00', '2020-12-18 18:07:29', '2020-12-22 16:18:24', '', '0', '2020-12-22 22:34:26', '0', '', '0', '0', '0', '85963954', '', null, '330', '15', '11.25', '675', '原价', '2', '刘仁飞', '11608123714263000enfTEx2x', '0', null, '系统管理员', null, '2020-12-25 13:46:54');
INSERT INTO `aikang_wbillitem` VALUES ('503', 'aikang', '60', '0', '0', '686816088712264111', '1', '20001', '0', '1', '20201225', '3', '中医推拿', '54', '15', '陆建峰', '0', '', '2000', '2020-12-25 12:40:26', '2020-12-25 12:43:19', '2020-12-25 12:41:18', '', '0', '2020-12-25 14:02:55', '0', '', '0', '0', '0', '04532512', '', null, '49.5', '1.5', '1.5', '118.8', '原价', '2', '刘仁飞', '11608123714263000enfTEx2x', '0', null, '系统管理员', null, '2020-12-25 14:06:18');
INSERT INTO `aikang_wbillitem` VALUES ('504', 'aikang', '60', '0', '0', '686816088712264111', '1', '20001', '0', '1', '20201225', '4', '中药沐足', '50', '9', '黄君慧', '0', '', '2000', '2020-12-25 12:40:26', '2020-12-25 12:43:24', '2020-12-25 12:41:58', '', '0', '2020-12-25 14:05:21', '0', '', '0', '0', '0', '01530665', '', null, '51', '1.5', '1.5', '118.8', '原价', '2', '刘仁飞', '11608123714263000enfTEx2x', '0', null, '系统管理员', null, '2020-12-25 14:06:18');
INSERT INTO `aikang_wbillitem` VALUES ('505', 'aikang', '62', '0', '0', '686816088758875782', '3', '205', '0', '2', '20201225', '1', '中医理疗', '43', '22', '张伟', '0', '', '2000', '2020-12-25 13:58:07', '2020-12-25 14:01:02', '2020-12-25 13:58:55', '', '0', '2020-12-25 15:06:05', '0', '', '0', '0', '0', '35174124', '', null, '48', '1', '1', '113.4', '原价', '2', '刘仁飞', '11608123714263000enfTEx2x', '0', null, '系统管理员', null, '2020-12-25 16:28:41');
INSERT INTO `aikang_wbillitem` VALUES ('506', 'aikang', '62', '0', '0', '686816088758875782', '3', '205', '0', '2', '20201225', '5', '拔罐', '43', '22', '张伟', '0', '', '2000', '2020-12-25 13:58:07', '2020-12-25 15:04:02', '2020-12-25 15:06:06', '', '0', '2020-12-25 16:26:26', '0', '', '0', '0', '0', '35174124', '', null, '75', '5', '2.5', '157.5', '原价', '2', '刘仁飞', '11608123714263000enfTEx2x', '0', null, '系统管理员', null, '2020-12-25 16:28:41');
INSERT INTO `aikang_wbillitem` VALUES ('507', 'aikang', '62', '0', '0', '686816088758875782', '2', '202', '0', '2', '20201225', '3', '中医推拿', '47', '5', '黄贞初', '0', '', '2000', '2020-12-25 13:58:07', '2020-12-25 14:00:44', '2020-12-25 13:58:28', '', '0', '2020-12-25 15:05:46', '0', '', '0', '0', '0', '64151125', '', null, '32', '1', '1', '79.2', '原价', '2', '刘仁飞', '11608123714263000enfTEx2x', '0', null, '系统管理员', null, '2020-12-25 16:28:41');
INSERT INTO `aikang_wbillitem` VALUES ('508', 'aikang', '62', '0', '1', '686816088758875782', '2', '202', '0', '2', '20201225', '4', '中药沐足', '47', '5', '黄贞初', '0', '', '2000', '2020-12-25 13:58:07', '2020-12-25 15:03:44', '2020-12-25 15:05:47', '', '0', '2020-12-25 16:26:26', '0', '', '0', '0', '0', '64151125', '', null, '51', '1.5', '1.5', '118.8', '原价', '2', '刘仁飞', '11608123714263000enfTEx2x', '0', null, '系统管理员', null, '2020-12-25 16:28:41');
INSERT INTO `aikang_wbillitem` VALUES ('509', 'aikang', '62', '0', '0', '686816088777683033', '1', '20001', '0', '3', '20201225', '3', '中医推拿', '54', '15', '陆建峰', '0', '', '2000', '2020-12-25 14:29:28', '2020-12-25 14:32:21', '2020-12-25 14:33:45', '', '0', '2020-12-25 16:26:42', '0', '', '0', '0', '0', '54329836', '', null, '66', '2', '2', '158.4', '原价', '2', '刘仁飞', '11608123714263000enfTEx2x', '0', null, '系统管理员', null, '2020-12-25 16:30:19');
INSERT INTO `aikang_wbillitem` VALUES ('510', 'aikang', '62', '0', '0', '686816088777683033', '1', '20001', '0', '3', '20201225', '3', '中医推拿', '50', '9', '黄君慧', '0', '', '2000', '2020-12-25 14:29:28', '2020-12-25 14:32:26', '2020-12-25 14:38:22', '', '0', '2020-12-25 16:26:42', '0', '', '0', '0', '0', '05347821', '', null, '64', '2', '2', '158.4', '原价', '2', '刘仁飞', '11608123714263000enfTEx2x', '0', null, '系统管理员', null, '2020-12-25 16:30:19');
INSERT INTO `aikang_wbillitem` VALUES ('511', 'aikang', '60', '0', '0', '686816088854069764', '1', '20001', '0', '4', '20201225', '1', '中医理疗', '54', '15', '陆建峰', '0', '', '2000', '2020-12-25 16:36:46', '2020-12-25 16:39:37', '2020-12-25 16:37:07', '', '0', '2020-12-25 16:44:37', '0', '', '0', '0', '0', '11514853', '', null, '23', '0.5', '0.5', '63', '原价', '4', '刘仁飞', '21608124037334000Zr2ST8CP', '0', null, '系统管理员', null, '2020-12-25 16:45:10');
INSERT INTO `aikang_wbillitem` VALUES ('512', 'aikang', '60', '0', '0', '686816088854069764', '1', '20001', '0', '4', '20201225', '7', '艾草沐足', '43', '22', '张伟', '0', '', '2000', '2020-12-25 16:36:46', '2020-12-25 16:39:45', '2020-12-25 16:38:32', '', '0', '2020-12-25 16:44:37', '0', '', '0', '0', '0', '19525030', '', null, '19', '0.5', '0.5', '44', '原价', '4', '刘仁飞', '21608124037334000Zr2ST8CP', '0', null, '系统管理员', null, '2020-12-25 16:45:10');
INSERT INTO `aikang_wbillitem` VALUES ('513', 'aikang', '60', '0', '0', '686816088854069764', '1', '20001', '0', '4', '20201225', '4', '中药沐足', '47', '5', '黄贞初', '0', '', '2000', '2020-12-25 16:36:46', '2020-12-25 16:39:42', '2020-12-25 16:37:49', '', '0', '2020-12-25 16:44:37', '0', '', '0', '0', '0', '52349925', '', null, '17', '0.5', '0.5', '44', '原价', '4', '刘仁飞', '21608124037334000Zr2ST8CP', '0', null, '系统管理员', null, '2020-12-25 16:45:10');
INSERT INTO `aikang_wbillitem` VALUES ('514', 'aikang', '61', '0', '0', '686816088866467325', '1', '20001', '0', '5', '20201225', '1', '中医理疗', '56', '18', '董明武', '0', '', '2000', '2020-12-25 16:57:26', '2020-12-25 17:00:17', '2020-12-25 16:58:27', '', '0', '2020-12-25 16:58:35', '0', '', '0', '0', '0', '58348331', '', null, '22.5', '0.5', '0.5', '56.7', '原价', '2', '刘仁飞', '11608123714263000enfTEx2x', '0', null, '系统管理员', null, '2020-12-25 17:00:57');
INSERT INTO `aikang_wbillitem` VALUES ('515', 'aikang', '61', '0', '0', '686816088866467325', '1', '20001', '0', '5', '20201225', '4', '中药沐足', '56', '18', '董明武', '0', '', '2000', '2020-12-25 16:57:26', '2020-12-25 18:03:17', '2020-12-25 16:58:41', '', '0', '2020-12-25 16:59:10', '0', '', '0', '0', '0', '58348331', '', null, '17', '0.5', '0.5', '39.6', '原价', '2', '刘仁飞', '11608123714263000enfTEx2x', '0', null, '系统管理员', null, '2020-12-25 17:00:57');
INSERT INTO `aikang_wbillitem` VALUES ('516', 'aikang', '61', '0', '0', '686816088866467325', '1', '20001', '0', '5', '20201225', '6', '刮痧', '56', '18', '董明武', '0', '', '2000', '2020-12-25 16:57:26', '2020-12-25 19:06:17', '2020-12-25 16:59:17', '', '0', '2020-12-25 16:59:29', '0', '', '0', '0', '0', '58348331', '', null, '23', '1', '0.75', '45', '原价', '2', '刘仁飞', '11608123714263000enfTEx2x', '0', null, '系统管理员', null, '2020-12-25 17:00:57');
INSERT INTO `aikang_wbillitem` VALUES ('517', 'aikang', '60', '0', '0', '686816088871972056', '1', '20001', '0', '6', '20201225', '1', '中医理疗', '53', '12', '江红', '0', '', '2000', '2020-12-25 17:06:37', '2020-12-25 17:09:35', '2020-12-25 17:06:58', '', '0', '2020-12-25 17:07:05', '0', '', '0', '0', '0', '50561508', '', null, '315', '7', '7', '793.8000000000001', '原价', '2', '刘仁飞', '11608123714263000enfTEx2x', '0', null, '系统管理员', null, '2020-12-25 17:08:14');
INSERT INTO `aikang_wbillitem` VALUES ('518', 'aikang', '61', '0', '0', '686816088873174347', '1', '20001', '0', '7', '20201225', '3', '中医推拿', '49', '8', '任彩凤', '0', '', '2000', '2020-12-25 17:08:37', '2020-12-25 17:11:36', '2020-12-25 17:08:54', '', '0', '2020-12-25 17:09:01', '0', '', '0', '0', '0', '21211112', '', null, '16', '0.5', '0.5', '39.6', '原价', '2', '刘仁飞', '11608123714263000enfTEx2x', '0', null, '系统管理员', null, '2020-12-25 17:09:46');
INSERT INTO `aikang_wbillitem` VALUES ('519', 'aikang', '62', '0', '0', '686816088874476278', '1', '20001', '0', '8', '20201225', '3', '中医推拿', '55', '16', '胡崇飞', '0', '', '2000', '2020-12-25 17:10:47', '2020-12-25 17:13:47', '2020-12-25 17:11:05', '', '0', '2020-12-25 17:11:13', '0', '', '0', '0', '0', '20992849', '', null, '16', '0.5', '0.5', '39.6', '原价', '2', '刘仁飞', '11608123714263000enfTEx2x', '0', null, '系统管理员', null, '2020-12-25 17:11:31');
INSERT INTO `aikang_wbillitem` VALUES ('520', 'aikang', '61', '0', '0', '686816088875267629', '1', '20001', '0', '9', '20201225', '3', '中医推拿', '57', '19', '张长铁', '0', '', '2000', '2020-12-25 17:12:06', '2020-12-25 17:15:06', '2020-12-25 17:12:23', '', '0', '2020-12-25 17:12:30', '0', '', '0', '0', '0', '21646310', '', null, '16', '0.5', '0.5', '39.6', '原价', '2', '刘仁飞', '11608123714263000enfTEx2x', '0', null, '系统管理员', null, '2020-12-25 17:13:05');
INSERT INTO `aikang_wbillitem` VALUES ('521', 'aikang', '62', '0', '0', '6868160888766178410', '1', '20001', '0', '10', '20201225', '1', '中医理疗', '52', '11', '罗永泽', '0', '', '2000', '2020-12-25 17:14:21', '2020-12-25 17:17:21', '2020-12-25 17:14:37', '', '0', '2020-12-25 17:14:50', '0', '', '0', '0', '0', '59058449', '', null, '22.5', '0.5', '0.5', '56.7', '原价', '2', '刘仁飞', '11608123714263000enfTEx2x', '0', null, '系统管理员', null, '2020-12-25 17:15:15');
INSERT INTO `aikang_wbillitem` VALUES ('522', 'aikang', '62', '0', '0', '6868160888774394711', '1', '20001', '0', '11', '20201225', '1', '中医理疗', '46', '3', '三姐', '0', '', '2000', '2020-12-25 17:15:43', '2020-12-25 17:18:42', '2020-12-25 17:16:01', '', '0', '2020-12-25 17:16:07', '0', '', '0', '0', '0', '95642468', '', null, '276', '6', '6', '680.4', '原价', '2', '刘仁飞', '11608123714263000enfTEx2x', '0', null, '系统管理员', null, '2020-12-25 17:16:29');
INSERT INTO `aikang_wbillitem` VALUES ('523', 'aikang', '62', '0', '0', '6868160888782532912', '1', '20001', '0', '12', '20201225', '1', '中医理疗', '58', '20', '陈海涛', '0', '', '2000', '2020-12-25 17:17:05', '2020-12-25 17:20:04', '2020-12-25 17:17:22', '', '0', '2020-12-25 17:17:39', '0', '', '0', '0', '0', '91028700', '', null, '22.5', '0.5', '0.5', '56.7', '原价', '2', '刘仁飞', '11608123714263000enfTEx2x', '0', null, '系统管理员', null, '2020-12-25 17:18:50');
INSERT INTO `aikang_wbillitem` VALUES ('524', 'aikang', '61', '0', '0', '6868160888794632113', '1', '20001', '0', '13', '20201225', '1', '中医理疗', '44', '1', '刘鹏', '0', '', '2000', '2020-12-25 17:19:06', '2020-12-25 17:22:05', '2020-12-25 17:19:24', '', '0', '2020-12-25 17:19:31', '0', '', '0', '0', '0', '31117019', '', null, '22.5', '0.5', '0.5', '56.7', '原价', '2', '刘仁飞', '11608123714263000enfTEx2x', '0', null, '系统管理员', null, '2020-12-25 17:19:40');
INSERT INTO `aikang_wbillitem` VALUES ('525', 'aikang', '61', '0', '0', '6868160888806130014', '1', '20001', '0', '14', '20201225', '1', '中医理疗', '48', '7', '刘振霞', '0', '', '2000', '2020-12-25 17:21:01', '2020-12-25 17:24:00', '2020-12-25 17:21:18', '', '0', '2020-12-25 17:21:25', '0', '', '0', '0', '0', '77197396', '', null, '337.5', '7.5', '7.5', '850.5', '原价', '2', '刘仁飞', '11608123714263000enfTEx2x', '0', null, '系统管理员', null, '2020-12-25 17:22:13');
INSERT INTO `aikang_wbillitem` VALUES ('526', 'aikang', '0', '0', '0', '6868160888866622715', '1', '20001', '0', '15', '20201225', '1', '中医理疗', '51', '10', '余玉华', '0', '', '2000', '2020-12-25 17:31:06', '2020-12-25 17:34:05', '2020-12-25 17:31:22', '', '0', '2020-12-25 17:31:29', '0', '', '0', '0', '0', '38663856', '', null, '22.5', '0.5', '0.5', '63', '原价', '0', '', '', '0', null, '系统管理员', null, '2020-12-25 17:31:44');
INSERT INTO `aikang_wbillitem` VALUES ('527', 'aikang', '60', '0', '0', '686816088891602991', '1', '20001', '0', '1', '20201225', '1', '中医理疗', '45', '2', '小草', '0', '', '2000', '2020-12-25 17:39:20', '2020-12-25 17:42:19', '2020-12-25 17:39:42', '', '0', '2020-12-25 17:39:51', '0', '', '0', '0', '0', '07938050', '', null, '23', '0.5', '0.5', '63', '原价', '4', '刘仁飞', '21608124037334000Zr2ST8CP', '0', null, '系统管理员', null, '2020-12-25 17:41:26');
INSERT INTO `aikang_wbillitem` VALUES ('528', 'aikang', '62', '0', '0', '686816088898465222', '1', '20001', '0', '2', '20201225', '1', '中医理疗', '50', '9', '黄君慧', '0', '', '2000', '2020-12-25 17:50:46', '2020-12-25 17:53:43', '2020-12-25 17:51:08', '', '0', '2020-12-25 17:51:16', '0', '', '0', '0', '0', '10677370', '', null, '67.5', '1.5', '1.5', '170.1', '原价', '2', '刘仁飞', '11608123714263000enfTEx2x', '0', null, '系统管理员', null, '2020-12-25 17:51:53');
INSERT INTO `aikang_wbillitem` VALUES ('529', 'aikang', '60', '0', '0', '686816088899901403', '1', '20001', '0', '3', '20201225', '1', '中医理疗', '54', '15', '陆建峰', '0', '', '2000', '2020-12-25 17:53:10', '2020-12-25 17:56:07', '2020-12-25 17:53:26', '', '0', '2020-12-25 17:53:35', '0', '', '0', '0', '0', '20522564', '', null, '23', '0.5', '0.5', '63', '原价', '4', '刘仁飞', '21608124037334000Zr2ST8CP', '0', null, '系统管理员', null, '2020-12-25 17:54:49');
INSERT INTO `aikang_wbillitem` VALUES ('530', 'aikang', '0', '0', '0', '686816093093441221', '1', '20001', '0', '1', '20210103', '1', '中医理疗', '47', '5', '黄贞初', '0', '', '2000', '2020-12-30 14:22:24', '2020-12-30 14:25:22', '2020-12-30 14:36:47', '', '0', '2020-12-30 14:37:28', '0', '', '0', '0', '0', '82362583', '', null, '22.5', '0.5', '0.5', '63', '原价', '0', '', '', '0', null, '系统管理员', null, '2021-01-03 16:12:58');
INSERT INTO `aikang_wbillitem` VALUES ('531', 'aikang', '100', '2', '0', '631609657079254pZp', '0', '', '0', '1', '20210103', '3', '中医推拿', '43', '22', '张伟', '0', '', '2001', '2021-01-03 16:08:32', '2020-12-30 17:19:24', '2021-01-03 16:16:45', '', '0', '2021-01-03 17:17:00', '63', '', '1', '0', '0', '69532766', '', null, '35', '0', '1', '88', '', '0', '', '', '0', '006', '张伟', null, '2021-01-03 17:17:56');
INSERT INTO `aikang_wbillitem` VALUES ('532', 'aikang', '100', '2', '0', '631609665528998cHE', '0', '', '0', '1', '20210105', '7', '艾草沐足', '56', '18', '董明武', '0', '', '2001', '2021-01-03 17:23:36', '2021-01-03 17:19:01', '2021-01-03 17:26:10', '', '0', '2021-01-03 18:26:30', '63', '', '1', '0', '0', '46172831', '', null, '35', '0', '1', '88', '', '0', '', '', '0', '1018', '董明武', null, '2021-01-05 19:42:39');
INSERT INTO `aikang_wbillitem` VALUES ('533', 'aikang', '100', '2', '1', '631609665528998cHE', '0', '', '0', '1', '20210105', '3', '中医推拿', '53', '12', '江红', '0', '', '2001', '2021-01-03 17:23:36', '2021-01-03 17:18:49', '2021-01-03 17:26:21', '', '0', '2021-01-03 18:26:30', '63', '', '1', '0', '0', '46172831', '', null, '32', '0', '1', '88', '', '0', '', '', '0', '1012', '江红', null, '2021-01-05 19:42:49');
INSERT INTO `aikang_wbillitem` VALUES ('534', 'aikang', '100', '4', '2', '631610366270873PRw', '0', '', '0', '1', '20210112', '3', '中医推拿', '57', '19', '张长铁', '0', '', '2001', '2021-01-12 14:40:54', '2021-01-11 18:37:48', '2021-01-12 14:44:23', '', '0', '2021-01-12 15:44:30', '63', '', '1', '0', '0', '01003163', '', null, '32', '0', '1', '88', '', '0', '', '', '0', '1019', '张长铁', null, '2021-01-12 18:15:11');
INSERT INTO `aikang_wbillitem` VALUES ('535', 'aikang', '100', '4', '2', '631610366270873PRw', '0', '', '0', '1', '20210112', '4', '中药沐足', '57', '19', '张长铁', '0', '', '2001', '2021-01-12 14:40:54', '2021-01-11 19:38:08', '2021-01-12 16:47:46', '', '0', '2021-01-12 17:48:00', '63', '', '1', '0', '0', '01003163', '', null, '34', '0', '1', '88', '', '0', '', '', '0', '1019', '张长铁', null, '2021-01-12 18:15:11');
INSERT INTO `aikang_wbillitem` VALUES ('536', 'aikang', '100', '4', '0', '631610366270873PRw', '0', '', '0', '1', '20210112', '3', '中医推拿', '52', '11', '罗永泽', '0', '', '2001', '2021-01-12 14:40:54', '2021-01-11 18:37:32', '2021-01-12 14:44:37', '', '0', '2021-01-12 15:45:00', '63', '', '1', '0', '0', '01003163', '', null, '32', '0', '1', '88', '', '0', '', '', '0', '1011', '罗永泽', null, '2021-01-12 18:47:01');
INSERT INTO `aikang_wbillitem` VALUES ('537', 'aikang', '100', '4', '0', '631610366270873PRw', '0', '', '0', '1', '20210112', '6', '刮痧', '52', '11', '罗永泽', '0', '', '2001', '2021-01-12 14:40:54', '2021-01-11 19:37:52', '2021-01-12 16:47:31', '', '0', '2021-01-12 17:13:00', '63', '', '1', '0', '0', '01003163', '', null, '22', '0', '0.75', '50', '', '0', '', '', '0', '1011', '罗永泽', null, '2021-01-12 18:47:01');
INSERT INTO `aikang_wbillitem` VALUES ('538', 'aikang', '100', '0', '0', '631610366270873PRw', '0', '', '0', '1', '20210112', '5', '拔罐', '52', '11', '罗永泽', '0', '', '2001', '2021-01-12 17:24:23', '2021-01-12 17:24:37', '2021-01-12 18:14:54', '', '0', '2021-01-12 18:30:00', '63', '', '1', '0', '0', '01003163', '', null, '15', '0', '0.5', '35', '', '0', '', '', '0', '1011', '罗永泽', null, '2021-01-12 18:47:01');
INSERT INTO `aikang_wbillitem` VALUES ('539', 'aikang', '100', '4', '3', '631610366270873PRw', '0', '', '0', '1', '20210112', '3', '中医推拿', '49', '8', '任彩凤', '0', '', '2001', '2021-01-12 14:40:54', '2021-01-11 18:38:03', '2021-01-12 14:43:44', '', '0', '2021-01-12 15:44:00', '63', '', '1', '0', '0', '01003163', '', null, '32', '0', '1', '88', '', '0', '', '', '0', '1008', '任彩凤', null, '2021-01-12 18:47:32');
INSERT INTO `aikang_wbillitem` VALUES ('540', 'aikang', '100', '4', '3', '631610366270873PRw', '0', '', '0', '1', '20210112', '7', '艾草沐足', '49', '8', '任彩凤', '0', '', '2001', '2021-01-12 14:40:54', '2021-01-11 19:38:23', '2021-01-12 16:47:22', '', '0', '2021-01-12 17:47:30', '63', '', '1', '0', '0', '01003163', '', null, '35', '0', '1', '88', '', '0', '', '', '0', '1008', '任彩凤', null, '2021-01-12 18:47:32');
INSERT INTO `aikang_wbillitem` VALUES ('541', 'aikang', '100', '4', '3', '631610366270873PRw', '0', '', '0', '1', '20210112', '9', '砭石灸', '49', '8', '任彩凤', '0', '', '2001', '2021-01-12 14:40:54', '2021-01-11 20:38:43', '2021-01-12 18:14:45', '', '0', '2021-01-12 18:36:00', '63', '', '1', '0', '0', '01003163', '', null, '20', '0', '1', '68', '', '0', '', '', '0', '1008', '任彩凤', null, '2021-01-12 18:47:32');
INSERT INTO `aikang_wbillitem` VALUES ('542', 'aikang', '100', '4', '1', '631610366270873PRw', '0', '', '0', '1', '20210112', '3', '中医推拿', '55', '16', '胡崇飞', '0', '', '2001', '2021-01-12 14:40:54', '2021-01-11 18:37:40', '2021-01-12 14:47:23', '', '0', '2021-01-12 15:47:30', '63', '', '1', '0', '0', '01003163', '', null, '32', '0', '1', '88', '', '0', '', '', '0', '1016', '胡崇飞', null, '2021-01-12 18:47:58');
INSERT INTO `aikang_wbillitem` VALUES ('543', 'aikang', '100', '4', '1', '631610366270873PRw', '0', '', '0', '1', '20210112', '8', '老姜足疗', '55', '16', '胡崇飞', '0', '', '2001', '2021-01-12 14:40:54', '2021-01-11 19:38:00', '2021-01-12 16:47:53', '', '0', '2021-01-12 17:48:00', '63', '', '1', '0', '0', '01003163', '', null, '35', '0', '1', '88', '', '0', '', '', '0', '1016', '胡崇飞', null, '2021-01-12 18:47:58');
INSERT INTO `aikang_wbillitem` VALUES ('544', 'aikang', '100', '0', '1', '631610366270873PRw', '0', '', '0', '1', '20210112', '5', '拔罐', '55', '16', '胡崇飞', '0', '', '2001', '2021-01-12 17:31:09', '2021-01-12 17:31:25', '2021-01-12 18:15:03', '', '0', '2021-01-12 18:30:30', '63', '', '1', '0', '0', '01003163', '', null, '15', '0', '0.5', '35', '', '0', '', '', '0', '1016', '胡崇飞', null, '2021-01-12 18:47:58');
INSERT INTO `aikang_wbillitem` VALUES ('545', 'aikang', '100', '2', '1', '631610512766971Tii', '0', '', '0', '1', '20210113', '8', '老姜足疗', '46', '3', '三姐', '0', '', '2001', '2021-01-13 12:40:44', '2021-01-13 12:36:49', '2021-01-13 12:43:10', '', '0', '2021-01-13 13:43:30', '63', '', '1', '0', '0', '67569497', '', null, '36', '0', '1', '61.2', '', '0', '', '', '0', '1003', '三姐', null, '2021-01-13 14:04:40');
INSERT INTO `aikang_wbillitem` VALUES ('546', 'aikang', '100', '2', '0', '631610512766971Tii', '0', '', '0', '1', '20210113', '3', '中医推拿', '58', '20', '陈海涛', '0', '', '2001', '2021-01-13 12:40:44', '2021-01-13 12:36:40', '2021-01-13 12:44:04', '', '0', '2021-01-13 13:44:30', '63', '', '1', '0', '0', '67569497', '', null, '32', '0', '1', '61.2', '', '0', '', '', '0', '1020', '陈海涛', null, '2021-01-13 14:04:56');
INSERT INTO `aikang_wbillitem` VALUES ('547', 'aikang', '100', '2', '0', '631610518887744MAk', '0', '', '0', '2', '20210113', '2', '采耳', '47', '5', '黄贞初', '0', '', '2001', '2021-01-13 14:27:38', '2021-01-13 14:20:21', '2021-01-13 14:32:02', '', '0', '2021-01-13 14:57:30', '63', '', '1', '0', '0', '45543386', '', null, '28', '0', '0.5', '50', '', '0', '', '', '0', '1005', '黄贞初', null, '2021-01-13 15:35:31');
INSERT INTO `aikang_wbillitem` VALUES ('548', 'aikang', '100', '2', '0', '631610518887744MAk', '0', '', '0', '2', '20210113', '8', '老姜足疗', '45', '2', '小草', '0', '', '2001', '2021-01-13 14:27:38', '2021-01-13 14:45:41', '2021-01-13 14:31:51', '', '0', '2021-01-13 15:32:00', '63', '', '1', '0', '0', '45543386', '', null, '36', '0', '1', '88', '', '0', '', '', '0', '1002', '小草', null, '2021-01-13 15:35:56');
INSERT INTO `aikang_wbillitem` VALUES ('549', 'aikang', '100', '2', '1', '631610518887744MAk', '0', '', '0', '2', '20210113', '4', '中药沐足', '48', '7', '刘振霞', '0', '', '2001', '2021-01-13 14:27:38', '2021-01-13 14:20:37', '2021-01-13 14:31:39', '', '0', '2021-01-13 15:32:00', '63', '', '1', '0', '0', '45543386', '', null, '34', '0', '1', '88', '', '0', '', '', '0', '1007', '刘振霞', null, '2021-01-13 17:21:17');
INSERT INTO `aikang_wbillitem` VALUES ('550', 'aikang', '100', '2', '1', '631610518887744MAk', '0', '', '0', '2', '20210113', '11', '修脚', '48', '7', '刘振霞', '0', '', '2001', '2021-01-13 14:27:38', '2021-01-13 15:20:57', '2021-01-13 15:36:06', '', '0', '2021-01-13 15:56:30', '63', '', '1', '0', '0', '45543386', '', null, '28', '0', '0.66', '50', '', '0', '', '', '0', '1007', '刘振霞', null, '2021-01-13 17:21:17');
INSERT INTO `aikang_wbillitem` VALUES ('551', 'aikang', '60', '0', '0', '686816105494832205', '1', '20001', '0', '5', '20210113', '1', '中医理疗', '51', '10', '余玉华', '0', '', '2000', '2021-01-13 22:51:23', '2021-01-13 22:54:11', '2021-01-13 22:53:52', '', '0', '2021-01-13 22:54:20', '0', '', '0', '0', '0', '81852692', '', null, '45', '1', '1', '113.4', '原价', '2', '刘仁飞', '11608123714263000enfTEx2x', '0', null, '系统管理员', null, '2021-01-13 22:55:33');
INSERT INTO `aikang_wbillitem` VALUES ('552', 'aikang', '60', '0', '0', '686816105494832205', '1', '20001', '0', '5', '20210113', '3', '中医推拿', '44', '1', '刘鹏', '0', '', '2000', '2021-01-13 22:51:23', '2021-01-13 22:54:07', '2021-01-13 22:52:49', '', '0', '2021-01-13 22:54:20', '0', '', '0', '0', '0', '50986006', '', null, '32', '1', '1', '79.2', '原价', '2', '刘仁飞', '11608123714263000enfTEx2x', '0', null, '系统管理员', null, '2021-01-13 22:55:33');
INSERT INTO `aikang_wbillitem` VALUES ('553', 'aikang', '60', '0', '0', '686816105494832205', '1', '20001', '0', '5', '20210113', '4', '中药沐足', '50', '9', '黄君慧', '0', '', '2000', '2021-01-13 22:51:23', '2021-01-13 22:54:21', '2021-01-13 22:54:03', '', '0', '2021-01-13 22:54:20', '0', '', '0', '0', '0', '20907602', '', null, '34', '1', '1', '79.2', '原价', '2', '刘仁飞', '11608123714263000enfTEx2x', '0', null, '系统管理员', null, '2021-01-13 22:55:33');
INSERT INTO `aikang_wbillitem` VALUES ('554', 'aikang', '60', '0', '0', '686816105498707406', '1', '20001', '0', '6', '20210113', '3', '中医推拿', '54', '15', '陆建峰', '0', '', '2000', '2021-01-13 22:57:50', '2021-01-13 23:00:33', '2021-01-13 22:59:00', '', '0', '2021-01-13 22:59:36', '0', '', '0', '0', '0', '15406619', '', null, '33', '1', '1', '79.2', '原价', '2', '刘仁飞', '11608123714263000enfTEx2x', '0', null, '系统管理员', null, '2021-01-13 23:00:10');
INSERT INTO `aikang_wbillitem` VALUES ('555', 'aikang', '60', '0', '0', '686816105498707406', '1', '20001', '0', '6', '20210113', '4', '中药沐足', '43', '22', '张伟', '0', '', '2000', '2021-01-13 22:57:50', '2021-01-13 23:00:49', '2021-01-13 22:59:26', '', '0', '2021-01-13 22:59:36', '0', '', '0', '0', '0', '86132670', '', null, '37', '1', '1', '79.2', '原价', '2', '刘仁飞', '11608123714263000enfTEx2x', '0', null, '系统管理员', null, '2021-01-13 23:00:10');
INSERT INTO `aikang_wbillitem` VALUES ('556', 'aikang', '60', '0', '0', '686816105498707406', '1', '20001', '0', '6', '20210113', '1', '中医理疗', '47', '5', '黄贞初', '0', '', '2000', '2021-01-13 22:57:50', '2021-01-13 23:00:35', '2021-01-13 22:59:13', '', '0', '2021-01-13 22:59:36', '0', '', '0', '0', '0', '58691110', '', null, '45', '1', '1', '113.4', '原价', '2', '刘仁飞', '11608123714263000enfTEx2x', '0', null, '系统管理员', null, '2021-01-13 23:00:10');
INSERT INTO `aikang_wbillitem` VALUES ('557', 'aikang', '60', '0', '0', '686816105501494107', '1', '20001', '0', '7', '20210113', '3', '中医推拿', '56', '18', '董明武', '0', '', '2000', '2021-01-13 23:02:29', '2021-01-13 23:05:23', '2021-01-13 23:03:31', '', '0', '2021-01-13 23:04:15', '0', '', '0', '0', '0', '03630848', '', null, '16', '0.5', '0.5', '39.6', '原价', '2', '刘仁飞', '11608123714263000enfTEx2x', '1457.8000000000002', null, '系统管理员', null, '2021-01-13 23:11:21');
INSERT INTO `aikang_wbillitem` VALUES ('558', 'aikang', '60', '0', '0', '686816105501494107', '1', '20001', '0', '7', '20210113', '3', '中医推拿', '53', '12', '江红', '0', '', '2000', '2021-01-13 23:02:29', '2021-01-13 23:05:25', '2021-01-13 23:03:46', '', '0', '2021-01-13 23:04:15', '0', '', '0', '0', '0', '75395344', '', null, '16', '0.5', '0.5', '39.6', '原价', '2', '刘仁飞', '11608123714263000enfTEx2x', '1418.2', null, '系统管理员', null, '2021-01-13 23:11:21');
INSERT INTO `aikang_wbillitem` VALUES ('559', 'aikang', '60', '0', '0', '686816105501494107', '1', '20001', '0', '7', '20210113', '3', '中医推拿', '49', '8', '任彩凤', '0', '', '2000', '2021-01-13 23:02:29', '2021-01-13 23:05:27', '2021-01-13 23:04:00', '', '0', '2021-01-13 23:04:15', '0', '', '0', '0', '0', '89665032', '', null, '16', '0.5', '0.5', '39.6', '原价', '2', '刘仁飞', '11608123714263000enfTEx2x', '1378.6000000000001', null, '系统管理员', null, '2021-01-13 23:11:21');
INSERT INTO `aikang_wbillitem` VALUES ('560', 'aikang', '60', '0', '0', '686816105519728338', '1', '20001', '0', '8', '20210113', '3', '中医推拿', '55', '16', '胡崇飞', '0', '', '2000', '2021-01-13 23:32:52', '2021-01-13 23:32:15', '2021-01-13 23:34:26', '', '0', '2021-01-13 23:34:46', '0', '', '0', '0', '0', '48382334', '', null, '32', '1', '1', '79.2', '原价', '2', '刘仁飞', '11608123714263000enfTEx2x', '1141', null, '系统管理员', null, '2021-01-13 23:35:35');
INSERT INTO `aikang_wbillitem` VALUES ('561', 'aikang', '60', '0', '0', '686816105519728338', '1', '20001', '0', '8', '20210113', '3', '中医推拿', '57', '19', '张长铁', '0', '', '2000', '2021-01-13 23:32:52', '2021-01-13 23:32:12', '2021-01-13 23:33:52', '', '0', '2021-01-13 23:34:46', '0', '', '0', '0', '0', '43889293', '', null, '32', '1', '1', '79.2', '原价', '2', '刘仁飞', '11608123714263000enfTEx2x', '1220.2', null, '系统管理员', null, '2021-01-13 23:35:35');
INSERT INTO `aikang_wbillitem` VALUES ('562', 'aikang', '60', '0', '0', '686816105519728338', '1', '20001', '0', '8', '20210113', '3', '中医推拿', '52', '11', '罗永泽', '0', '', '2000', '2021-01-13 23:32:52', '2021-01-13 23:32:13', '2021-01-13 23:34:04', '', '0', '2021-01-13 23:34:46', '0', '', '0', '0', '0', '09223317', '', null, '32', '1', '1', '79.2', '原价', '2', '刘仁飞', '11608123714263000enfTEx2x', '1299.4', null, '系统管理员', null, '2021-01-13 23:35:35');
INSERT INTO `aikang_wbillitem` VALUES ('563', 'aikang', '100', '2', '0', '631610596553392f8M', '0', '', '0', '1', '20210114', '3', '中医推拿', '43', '22', '张伟', '0', '', '2000', '2021-01-14 11:56:29', '2021-01-14 11:55:39', '2021-01-14 11:58:48', '', '0', '2021-01-14 12:57:40', '63', '', '1', '0', '0', '58557338', '', null, '35', '1', '1', '79.2', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '1069.72', '006', '张伟', null, '2021-01-14 14:08:09');
INSERT INTO `aikang_wbillitem` VALUES ('564', 'aikang', '100', '2', '0', '631610596553392f8M', '0', '', '0', '1', '20210114', '4', '中药沐足', '43', '22', '张伟', '0', '', '2001', '2021-01-14 11:56:29', '2021-01-14 12:55:59', '2021-01-14 12:57:41', '', '0', '2021-01-14 13:58:00', '63', '', '1', '0', '0', '58557338', '', null, '37', '0', '1', '79.2', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '998.44', '006', '张伟', null, '2021-01-14 14:08:09');
INSERT INTO `aikang_wbillitem` VALUES ('565', 'aikang', '100', '2', '1', '631610596553392f8M', '0', '', '0', '1', '20210114', '3', '中医推拿', '57', '19', '张长铁', '0', '', '2000', '2021-01-14 11:56:29', '2021-01-14 11:55:57', '2021-01-14 11:59:04', '', '0', '2021-01-14 12:57:51', '63', '', '1', '0', '0', '58557338', '', null, '32', '1', '1', '79.2', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '927.16', '1019', '张长铁', null, '2021-01-14 14:08:17');
INSERT INTO `aikang_wbillitem` VALUES ('566', 'aikang', '100', '2', '1', '631610596553392f8M', '0', '', '0', '1', '20210114', '8', '老姜足疗', '57', '19', '张长铁', '0', '', '2001', '2021-01-14 11:56:29', '2021-01-14 12:56:17', '2021-01-14 12:57:52', '', '0', '2021-01-14 13:58:00', '63', '', '1', '0', '0', '58557338', '', null, '35', '0', '1', '79.2', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '855.88', '1019', '张长铁', null, '2021-01-14 14:08:17');
INSERT INTO `aikang_wbillitem` VALUES ('567', 'aikang', '100', '2', '0', '631610619638713aQ5', '0', '', '0', '2', '20210114', '3', '中医推拿', '46', '3', '三姐', '0', '', '2001', '2021-01-14 18:21:04', '2021-01-14 18:20:47', '2021-01-14 18:24:19', '', '0', '2021-01-14 20:18:00', '63', '', '1', '0', '0', '95350258', '', null, '33', '0', '1', '79.2', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '745', '1003', '三姐', null, '2021-01-14 20:19:22');
INSERT INTO `aikang_wbillitem` VALUES ('568', 'aikang', '100', '2', '1', '631610619638713aQ5', '0', '', '0', '2', '20210114', '1', '中医理疗', '55', '16', '张永胜', '0', '', '2001', '2021-01-14 18:21:04', '2021-01-14 18:20:53', '2021-01-14 18:25:18', '', '0', '2021-01-14 20:18:00', '63', '', '1', '0', '0', '95350258', '', null, '46', '0', '1', '113.4', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '631.6', '1016', '张永胜', null, '2021-01-14 20:20:05');
INSERT INTO `aikang_wbillitem` VALUES ('569', 'aikang', '100', '0', '0', '631610619638713aQ5', '0', '', '0', '2', '20210115', '3', '中医推拿', '44', '1', '梁韵仪', '0', '', '2001', '2021-01-14 22:55:17', '2021-01-14 22:55:33', '2021-01-14 23:15:33', '', '0', '2021-01-15 09:55:30', '63', '', '1', '0', '0', '95350258', '', null, '32', '0', '1', '79.2', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '168.99999999999994', '1001', '梁韵仪', null, '2021-01-15 10:01:53');
INSERT INTO `aikang_wbillitem` VALUES ('570', 'aikang', '100', '2', '0', '631610619638713aQ5', '0', '', '0', '2', '20210115', '10', '聚阳箱灸', '44', '1', '梁韵仪', '0', '', '2001', '2021-01-14 18:21:56', '2021-01-14 19:21:07', '2021-01-14 20:19:59', '', '0', '2021-01-14 21:20:00', '63', '', '1', '0', '0', '95350258', '', null, '38', '0', '1', '142.20000000000002', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '503.62', '1001', '梁韵仪', null, '2021-01-15 10:01:53');
INSERT INTO `aikang_wbillitem` VALUES ('571', 'aikang', '100', '0', '1', '631610619638713aQ5', '0', '', '0', '2', '20210115', '16', '脾胃调理三效合一', '51', '10', '陈月雪', '0', '', '2001', '2021-01-14 20:26:39', '2021-01-14 20:26:56', '2021-01-14 22:23:03', '', '0', '2021-01-15 09:55:30', '63', '', '1', '0', '0', '95350258', '', null, '88', '0', '1.5', '241.20000000000002', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '272.31999999999994', '1010', '陈月雪', null, '2021-01-15 10:02:17');
INSERT INTO `aikang_wbillitem` VALUES ('572', 'aikang', '100', '0', '1', '631610619638713aQ5', '0', '', '0', '2', '20210115', '16', '脾胃调理三效合一', '51', '10', '陈月雪', '0', '', '2001', '2021-01-14 20:32:16', '2021-01-14 21:57:16', '2021-01-15 10:18:05', '', '0', '2021-01-15 12:10:00', '63', '', '1', '0', '0', '95350258', '', null, '88', '0', '1.5', '268', '', '4', '刘仁飞', '21608124037334000Zr2ST8CP', '991', '1010', '陈月雪', null, '2021-01-15 12:11:22');
INSERT INTO `aikang_wbillitem` VALUES ('573', 'aikang', '60', '0', '0', '686816106806531371', '1', '20001', '1', '1', '20210115', '3', '中医推拿', '45', '2', '小草', '0', '', '2000', '2021-01-15 11:17:33', '2021-01-15 11:20:31', '2021-01-15 11:34:15', '', '0', '2021-01-15 12:23:11', '0', '', '0', '0', '0', '91090373', '', null, '35', '1', '1', '79.2', '原价', '2', '刘仁飞', '11608123714263000enfTEx2x', '2089.8', null, '系统管理员', null, '2021-01-15 12:23:44');
INSERT INTO `aikang_wbillitem` VALUES ('574', 'aikang', '100', '3', '2', '631610684766474hF2', '0', '', '0', '2', '20210115', '7', '艾草沐足', '58', '20', '陈海涛', '0', '', '2001', '2021-01-15 12:27:23', '2021-01-15 12:26:02', '2021-01-15 12:32:41', '', '0', '2021-01-15 12:36:00', '63', '', '1', '0', '0', '01408968', '', null, '35', '0', '1', '79.2', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '1818.0000000000002', '1020', '陈海涛', null, '2021-01-15 12:44:29');
INSERT INTO `aikang_wbillitem` VALUES ('575', 'aikang', '100', '3', '0', '631610684766474hF2', '0', '', '0', '2', '20210115', '3', '中医推拿', '45', '2', '小草', '0', '', '2001', '2021-01-15 12:27:23', '2021-01-15 12:25:45', '2021-01-15 12:32:30', '', '0', '2021-01-15 12:36:00', '63', '', '1', '0', '0', '01408968', '', null, '33', '0', '1', '79.2', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '2010.6000000000001', '1002', '小草', null, '2021-01-15 12:44:37');
INSERT INTO `aikang_wbillitem` VALUES ('576', 'aikang', '100', '3', '1', '631610684766474hF2', '0', '', '0', '2', '20210115', '1', '中医理疗', '54', '15', '陆建峰', '0', '', '2001', '2021-01-15 12:27:23', '2021-01-15 12:25:53', '2021-01-15 12:32:54', '', '0', '2021-01-15 12:36:00', '63', '', '1', '0', '0', '01408968', '', null, '46', '0', '1', '113.4', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '1897.2000000000003', '1015', '陆建峰', null, '2021-01-15 12:44:45');
INSERT INTO `aikang_wbillitem` VALUES ('577', 'aikang', '100', '3', '1', '631610706723404kWQ', '0', '', '0', '3', '20210116', '1', '中医理疗', '59', '28', '阿桃', '0', '', '2001', '2021-01-15 18:32:31', '2021-01-15 18:29:47', '2021-01-16 00:06:55', '', '0', '2021-01-16 10:51:00', '63', '', '1', '0', '0', '61856161', '', null, '45', '0', '1', '113.4', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '1625.4', '1028', '阿桃', null, '2021-01-16 11:19:32');
INSERT INTO `aikang_wbillitem` VALUES ('578', 'aikang', '100', '3', '2', '631610706723404kWQ', '0', '', '0', '3', '20210116', '4', '中药沐足', '53', '12', '露露', '0', '', '2001', '2021-01-15 18:32:31', '2021-01-15 18:29:51', '2021-01-16 00:07:07', '', '0', '2021-01-16 10:51:00', '63', '', '1', '0', '0', '61856161', '', null, '34', '0', '1', '79.2', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '1546.2000000000003', '1012', '露露', null, '2021-01-16 11:26:14');
INSERT INTO `aikang_wbillitem` VALUES ('579', 'aikang', '100', '3', '0', '631610706723404kWQ', '0', '', '0', '3', '20210116', '3', '中医推拿', '49', '8', '杨慧明', '0', '', '2001', '2021-01-15 18:32:31', '2021-01-15 18:29:41', '2021-01-16 00:06:23', '', '0', '2021-01-16 10:51:00', '63', '', '1', '0', '0', '61856161', '', null, '32', '0', '1', '79.2', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '1738.8000000000002', '1008', '杨慧明', null, '2021-01-16 11:31:32');
INSERT INTO `aikang_wbillitem` VALUES ('580', 'aikang', '100', '3', '0', '631610706723404kWQ', '0', '', '0', '3', '20210116', '5', '拔罐', '49', '8', '杨慧明', '0', '', '2001', '2021-01-15 18:33:11', '2021-01-15 19:30:01', '2021-01-16 11:11:38', '', '0', '2021-01-16 11:27:00', '63', '', '1', '0', '0', '61856161', '', null, '15', '0', '0.5', '31.5', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '1514.7000000000003', '1008', '杨慧明', null, '2021-01-16 11:31:32');
INSERT INTO `aikang_wbillitem` VALUES ('581', 'aikang', '100', '2', '0', '6316107846235862aP', '0', '', '0', null, '20210116', '3', '中医推拿', '59', '28', '阿桃', '0', '', '2001', '2021-01-16 16:10:42', '2021-01-16 16:10:32', '2021-01-16 16:15:53', '', '0', '2021-01-16 17:16:00', '63', '', '1', '0', '0', '73542896', '', null, '32', '0', '1', '79.2', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '1435.5000000000002', '1028', '阿桃', null, '2021-01-16 18:50:03');
INSERT INTO `aikang_wbillitem` VALUES ('582', 'aikang', '100', '2', '1', '6316107846235862aP', '0', '', '2', null, '20210116', '4', '中药沐足', '46', '3', '三姐', '0', '', '2001', '2021-01-16 16:10:42', '2021-01-16 16:10:39', '2021-01-16 16:16:04', '', '0', '2021-01-16 17:16:30', '63', '', '1', '0', '0', '73542896', '', null, '35', '0', '1', '79.2', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '1356.3000000000002', '1003', '三姐', null, '2021-01-16 18:50:09');
INSERT INTO `aikang_wbillitem` VALUES ('583', 'aikang', '0', '0', '0', '686816107836745041', '2', '202', '0', null, '20210116', '1', '中医理疗', '49', '8', '杨慧明', '0', '', '2001', '2021-01-16 15:54:34', '2021-01-16 15:57:33', '2021-01-16 16:03:46', '', '0', '2021-01-16 18:47:30', '0', '', '1', '12600', '0', '66199260', '', null, '45', '1', '1', '126', '原价', '0', '', '', '0', null, '系统管理员', null, '2021-01-16 18:55:54');
INSERT INTO `aikang_wbillitem` VALUES ('584', 'aikang', '100', '2', '0', '631610795353707dGf', '0', '', '0', null, '20210116', '3', '中医推拿', '61', '22', '张伟', '0', '', '2001', '2021-01-16 19:09:51', '2021-01-16 19:09:16', '2021-01-16 19:13:43', '', '0', '2021-01-16 19:19:00', '63', '', '1', '0', '0', '87396368', '', null, '32', '0', '1', '79.2', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '1277.1000000000001', '1022', '张伟', null, '2021-01-16 19:19:47');
INSERT INTO `aikang_wbillitem` VALUES ('585', 'aikang', '100', '0', '0', '631610795353707dGf', '0', '', '0', null, '20210116', '6', '刮痧', '61', '22', '张伟', '0', '', '2001', '2021-01-16 19:11:26', '2021-01-16 20:09:36', '2021-01-16 19:19:12', '', '0', '2021-01-16 19:19:30', '63', '', '1', '0', '0', '87396368', '', null, '22', '0', '0.75', '45', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '1116.9', '1022', '张伟', null, '2021-01-16 19:19:47');
INSERT INTO `aikang_wbillitem` VALUES ('586', 'aikang', '100', '2', '1', '631610795353707dGf', '0', '', '0', null, '20210116', '15', '精油推拿60分钟', '60', '6', '张进步', '0', '', '2001', '2021-01-16 19:09:51', '2021-01-16 19:09:30', '2021-01-16 19:13:25', '', '0', '2021-01-16 19:19:00', '63', '', '1', '0', '0', '87396368', '', null, '45', '0', '1', '115.2', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '1161.9', '1006', '张进步', null, '2021-01-16 19:19:55');
INSERT INTO `aikang_wbillitem` VALUES ('587', 'aikang', '0', '0', '0', '686816107945645531', '2', '202', '0', null, '20210116', '4', '中药沐足', '53', '12', '露露', '0', '', '2000', '2021-01-16 18:56:04', '2021-01-16 18:59:03', '2021-01-16 18:56:33', '', '0', '2021-01-16 20:22:02', '0', '', '0', '0', '0', '12488697', '', null, '51', '1.5', '1.5', '129', '美团', '0', '', '', '0', null, '系统管理员', null, '2021-01-16 20:22:39');
INSERT INTO `aikang_wbillitem` VALUES ('588', 'aikang', '100', '3', '2', '631610796127287HjB', '3', '205', '0', null, '20210116', '16', '脾胃调理三效合一', '51', '10', '陈月雪', '0', '', '2001', '2021-01-16 19:22:31', '2021-01-16 19:22:17', '2021-01-16 19:23:39', '', '0', '2021-01-16 20:54:00', '63', '', '1', '0', '0', '03182407', '', null, '88', '0', '1.5', '241.20000000000002', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '683.1', '1010', '陈月雪', null, '2021-01-16 20:54:21');
INSERT INTO `aikang_wbillitem` VALUES ('589', 'aikang', '100', '3', '1', '631610796127287HjB', '0', '', '0', null, '20210116', '7', '艾草沐足', '44', '1', '梁韵仪', '0', '', '2001', '2021-01-16 19:22:31', '2021-01-16 19:22:11', '2021-01-16 19:23:47', '', '0', '2021-01-16 20:24:00', '63', '', '1', '0', '0', '03182407', '', null, '35', '0', '1', '79.2', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '924.3000000000001', '1001', '梁韵仪', null, '2021-01-16 20:54:27');
INSERT INTO `aikang_wbillitem` VALUES ('590', 'aikang', '100', '3', '0', '631610796127287HjB', '0', '', '0', null, '20210116', '1', '中医理疗', '55', '16', '张永胜', '0', '', '2001', '2021-01-16 19:22:31', '2021-01-16 19:22:05', '2021-01-16 19:23:56', '', '0', '2021-01-16 20:24:00', '63', '', '1', '0', '0', '03182407', '', null, '46', '0', '1', '112.4', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '1003.5000000000001', '1016', '张永胜', null, '2021-01-16 20:54:33');
INSERT INTO `aikang_wbillitem` VALUES ('591', 'aikang', '100', '3', '0', '631610873463977njM', '0', '', '0', null, '20210117', '3', '中医推拿', '45', '2', '小草', '0', '', '2001', '2021-01-17 16:51:16', '2021-01-17 16:51:06', '2021-01-17 16:53:08', '', '0', '2021-01-17 16:54:30', '63', '', '1', '0', '0', '92653624', '', null, '33', '1', '1', '79.2', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '603.9', '1002', '小草', null, '2021-01-17 16:55:23');
INSERT INTO `aikang_wbillitem` VALUES ('592', 'aikang', '100', '3', '1', '631610873463977njM', '0', '', '0', null, '20210117', '1', '中医理疗', '54', '15', '陆建峰', '0', '', '2001', '2021-01-17 16:51:16', '2021-01-17 16:51:12', '2021-01-17 16:53:29', '', '0', '2021-01-17 16:55:00', '63', '', '1', '0', '0', '92653624', '', null, '46', '1', '1', '113.4', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '490.5', '1015', '陆建峰', null, '2021-01-17 16:56:14');
INSERT INTO `aikang_wbillitem` VALUES ('593', 'aikang', '100', '3', '2', '631610873463977njM', '0', '', '0', null, '20210117', '4', '中药沐足', '58', '20', '陈海涛', '0', '', '2001', '2021-01-17 16:51:16', '2021-01-17 16:51:20', '2021-01-17 16:53:39', '', '0', '2021-01-17 16:55:00', '63', '', '1', '0', '0', '92653624', '', null, '34', '1', '1', '79.2', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '411.3', '1020', '陈海涛', null, '2021-01-17 16:56:20');
INSERT INTO `aikang_wbillitem` VALUES ('594', 'aikang', '100', '1', '0', '631610874427169HPD', '0', '', '0', null, '20210117', '3', '中医推拿', '59', '28', '阿桃', '0', '', '2001', '2021-01-17 17:07:18', '2021-01-17 17:07:12', '2021-01-17 17:10:12', '', '0', '2021-01-17 17:11:00', '63', '', '1', '0', '0', '85349088', '', null, '32', '1', '1', '79.2', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '332.1', '1028', '阿桃', null, '2021-01-17 17:13:22');
INSERT INTO `aikang_wbillitem` VALUES ('595', 'aikang', '100', '1', '0', '631610874427169HPD', '0', '', '0', null, '20210117', '6', '刮痧', '59', '28', '阿桃', '0', '', '2001', '2021-01-17 17:07:18', '2021-01-17 18:07:32', '2021-01-17 17:11:09', '', '0', '2021-01-17 17:12:00', '63', '', '1', '0', '0', '85349088', '', null, '22', '1', '0.75', '45', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '287.1', '1028', '阿桃', null, '2021-01-17 17:13:22');
INSERT INTO `aikang_wbillitem` VALUES ('596', 'aikang', '100', '1', '0', '631610874427169HPD', '0', '', '0', null, '20210117', '5', '拔罐', '59', '28', '阿桃', '0', '', '2001', '2021-01-17 17:07:18', '2021-01-17 18:32:52', '2021-01-17 17:12:09', '', '0', '2021-01-17 17:12:30', '63', '', '1', '0', '0', '85349088', '', null, '15', '1', '0.5', '31.5', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '255.60000000000002', '1028', '阿桃', null, '2021-01-17 17:13:22');
INSERT INTO `aikang_wbillitem` VALUES ('597', 'aikang', '100', '2', '0', '6316109836067337z5', '0', '', '0', null, '20210119', '3', '中医推拿', '58', '20', '陈海涛', '0', '', '2001', '2021-01-18 23:26:58', '2021-01-18 23:26:54', '2021-01-18 23:29:18', '', '0', '2021-01-19 00:31:00', '63', '', '1', '0', '0', '41995776', '', null, '32', '1', '1', '79.2', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '176.40000000000003', '1020', '陈海涛', null, '2021-01-19 14:30:07');
INSERT INTO `aikang_wbillitem` VALUES ('598', 'aikang', '100', '2', '1', '6316109836067337z5', '0', '', '0', null, '20210119', '4', '中药沐足', '55', '16', '张永胜', '0', '', '2001', '2021-01-18 23:26:58', '2021-01-18 23:27:03', '2021-01-18 23:29:28', '', '0', '2021-01-19 00:31:00', '63', '', '1', '0', '0', '41995776', '', null, '35', '1', '1', '79.2', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '97.20000000000002', '1016', '张永胜', null, '2021-01-19 14:30:14');
INSERT INTO `aikang_wbillitem` VALUES ('599', 'aikang', '0', '0', '0', '686816109563454311', '1', '20001', '1', null, '20210119', '3', '中医推拿', '51', '10', '陈月雪', '0', '', '2000', '2021-01-18 15:52:25', '2021-01-18 15:55:24', '2021-01-18 23:14:22', '', '0', '2021-01-19 12:52:25', '0', '', '0', '0', '0', '16844855', '', null, '35', '1', '1', '88', '原价', '0', '', '', '0', null, '系统管理员', null, '2021-01-19 16:04:08');
INSERT INTO `aikang_wbillitem` VALUES ('600', 'aikang', '0', '0', '0', '686816109563454311', '3', '205', '2', null, '20210119', '1', '中医理疗', '60', '6', '张进步', '0', '', '2000', '2021-01-18 15:52:25', '2021-01-18 15:55:24', '2021-01-18 22:59:10', '', '0', '2021-01-18 23:59:10', '0', '', '0', '0', '0', '16844855', '', null, '22.5', '0.5', '0.5', '63', '原价', '0', '', '', '0', null, '系统管理员', null, '2021-01-19 16:04:08');
INSERT INTO `aikang_wbillitem` VALUES ('601', 'aikang', '0', '0', '0', '686816109563454311', '1', '20001', '2', null, '20210119', '3', '中医推拿', '61', '22', '张伟', '0', '', '2000', '2021-01-18 15:52:25', '2021-01-18 15:55:24', '2021-01-18 23:11:54', '', '0', '2021-01-18 23:13:02', '0', '', '0', '0', '0', '16844855', '', null, '16', '0.5', '0.5', '44', '原价', '0', '', '', '0', null, '系统管理员', null, '2021-01-19 16:04:08');
INSERT INTO `aikang_wbillitem` VALUES ('602', 'aikang', '0', '0', '0', '686816109563454311', '1', '20001', '2', null, '20210119', '3', '中医推拿', '60', '6', '张进步', '0', '', '2000', '2021-01-18 15:52:25', '2021-01-18 15:55:24', '2021-01-19 14:49:57', '', '0', '2021-01-19 16:02:27', '0', '', '0', '0', '0', '16844855', '', null, '48', '1.5', '1.5', '132', '原价', '0', '', '', '0', null, '系统管理员', null, '2021-01-19 16:04:08');
INSERT INTO `aikang_wbillitem` VALUES ('603', 'aikang', '0', '0', '0', '686816109590106932', '1', '20001', '0', null, '20210119', '3', '中医推拿', '53', '12', '露露', '0', '', '2000', '2021-01-18 16:36:50', '2021-01-18 16:39:50', '2021-01-18 22:59:47', '', '0', '2021-01-19 14:59:44', '0', '', '0', '0', '0', '88240079', '', null, '512', '16', '16', '1408', '原价', '0', '', '', '0', null, '系统管理员', null, '2021-01-19 16:04:18');
INSERT INTO `aikang_wbillitem` VALUES ('604', 'aikang', '100', '3', '0', '631611037997554B5S', '0', '', '0', null, '20210119', '3', '中医推拿', '45', '2', '小草', '0', '', '2001', '2021-01-19 14:33:31', '2021-01-19 14:33:13', '2021-01-19 14:49:44', '', '0', '2021-01-19 15:50:00', '63', '', '1', '0', '0', '20033045', '', null, '0', '0', '0', '88', '', '4', '刘仁飞', '21608124037334000Zr2ST8CP', '903', null, '系统管理员', null, '2021-01-19 16:04:27');
INSERT INTO `aikang_wbillitem` VALUES ('605', 'aikang', '100', '3', '1', '631611037997554B5S', '0', '', '0', null, '20210119', '1', '中医理疗', '51', '10', '陈月雪', '0', '', '2001', '2021-01-19 14:33:31', '2021-01-19 14:33:22', '2021-01-19 14:50:36', '', '0', '2021-01-19 15:51:00', '63', '', '1', '0', '0', '20033045', '', null, '45', '1', '1', '126', '', '4', '刘仁飞', '21608124037334000Zr2ST8CP', '777', null, '系统管理员', null, '2021-01-19 17:25:31');
INSERT INTO `aikang_wbillitem` VALUES ('606', 'aikang', '100', '3', '2', '631611037997554B5S', '0', '', '0', null, '20210119', '4', '中药沐足', '60', '6', '张进步', '0', '', '2001', '2021-01-19 14:33:31', '2021-01-19 14:33:35', '2021-01-19 16:02:34', '', '0', '2021-01-19 17:03:00', '63', '', '1', '0', '0', '20033045', '', null, '34', '1', '1', '88', '', '4', '刘仁飞', '21608124037334000Zr2ST8CP', '689', null, '系统管理员', null, '2021-01-19 17:25:38');
INSERT INTO `aikang_wbillitem` VALUES ('607', 'aikang', '100', '2', '1', '631611049710325M4Y', '0', '', '0', null, '20210119', '7', '艾草沐足', '54', '15', '陆建峰', '0', '', '2001', '2021-01-19 17:48:36', '2021-01-19 17:48:47', '2021-01-19 17:49:49', '', '0', '2021-01-19 17:56:30', '63', '', '1', '0', '0', '95087534', '', null, '34', '1', '1', '88', '', '4', '刘仁飞', '21608124037334000Zr2ST8CP', '423', null, '系统管理员', null, '2021-01-19 18:07:10');
INSERT INTO `aikang_wbillitem` VALUES ('608', 'aikang', '100', '2', '0', '631611049710325M4Y', '0', '', '0', null, '20210119', '15', '精油推拿60分钟', '61', '22', '张伟', '0', '', '2001', '2021-01-19 17:48:36', '2021-01-19 17:48:33', '2021-01-19 17:49:33', '', '0', '2021-01-19 17:56:30', '63', '', '1', '0', '0', '95087534', '', null, '45', '1', '1', '128', '', '4', '刘仁飞', '21608124037334000Zr2ST8CP', '561', null, '系统管理员', null, '2021-01-19 18:07:10');
INSERT INTO `aikang_wbillitem` VALUES ('609', 'aikang', '100', '2', '0', '631611049710325M4Y', '0', '', '0', null, '20210119', '6', '刮痧', '61', '22', '张伟', '0', '', '2001', '2021-01-19 17:48:36', '2021-01-19 18:48:53', '2021-01-19 18:00:42', '', '0', '2021-01-19 18:01:30', '63', '', '1', '0', '0', '95087534', '', null, '22', '1', '0.75', '50', '', '4', '刘仁飞', '21608124037334000Zr2ST8CP', '511', null, '系统管理员', null, '2021-01-19 18:07:10');
INSERT INTO `aikang_wbillitem` VALUES ('613', 'aikang', '100', '2', '1', '631611050893843Try', '0', '', '0', null, '20210119', '10', '聚阳箱灸', '44', '1', '梁韵仪', '0', '', '2001', '2021-01-19 18:08:21', '2021-01-19 18:08:30', '2021-01-19 18:10:35', '', '0', '2021-01-19 18:11:30', '63', '', '1', '0', '0', '92125515', '', null, '38', '1', '1', '158', '', '4', '刘仁飞', '21608124037334000Zr2ST8CP', '104', null, '系统管理员', null, '2021-01-19 18:18:46');
INSERT INTO `aikang_wbillitem` VALUES ('614', 'aikang', '100', '2', '0', '631611050893843Try', '0', '', '0', null, '20210119', '1', '中医理疗', '59', '28', '阿桃', '0', '', '2001', '2021-01-19 18:08:21', '2021-01-19 18:08:05', '2021-01-19 18:10:21', '', '0', '2021-01-19 18:11:30', '63', '', '1', '0', '0', '92125515', '', null, '45', '1', '1', '126', '', '4', '刘仁飞', '21608124037334000Zr2ST8CP', '297', null, '系统管理员', null, '2021-01-19 18:18:46');
INSERT INTO `aikang_wbillitem` VALUES ('615', 'aikang', '100', '2', '0', '631611050893843Try', '0', '', '0', null, '20210119', '5', '拔罐', '59', '28', '阿桃', '0', '', '2001', '2021-01-19 18:08:21', '2021-01-19 19:08:25', '2021-01-19 18:11:39', '', '0', '2021-01-19 18:12:30', '63', '', '1', '0', '0', '92125515', '', null, '15', '1', '0.5', '35', '', '4', '刘仁飞', '21608124037334000Zr2ST8CP', '262', null, '系统管理员', null, '2021-01-19 18:18:46');
INSERT INTO `aikang_wbillitem` VALUES ('616', 'aikang', '100', '2', '0', '631611052003607JYn', '0', '', '0', null, '20210119', '8', '老姜足疗', '53', '12', '露露', '0', '', '2001', '2021-01-19 18:26:50', '2021-01-19 18:26:51', '2021-01-19 18:44:17', '', '0', '2021-01-19 18:45:30', '63', '', '1', '0', '0', '71896884', '', null, '36.5', '1', '1', '79.2', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '1818', '1012', '露露', null, '2021-01-19 18:46:32');
INSERT INTO `aikang_wbillitem` VALUES ('617', 'aikang', '100', '2', '1', '631611052003607JYn', '0', '', '0', null, '20210119', '15', '精油推拿60分钟', '46', '3', '三姐', '0', '', '2001', '2021-01-19 18:26:50', '2021-01-19 18:26:58', '2021-01-19 18:44:31', '', '0', '2021-01-19 18:45:30', '63', '', '1', '0', '0', '71896884', '', null, '67.5', '1.5', '1', '115.6', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '1702.3999999999999', '1003', '三姐', null, '2021-01-19 18:48:35');
INSERT INTO `aikang_wbillitem` VALUES ('618', 'aikang', '100', '2', '1', '631611059057366aAz', '0', '', '1', null, '20210119', '1', '中医理疗', '59', '28', '阿桃', '0', '', '2001', '2021-01-19 20:24:24', '2021-01-19 20:24:24', '2021-01-19 20:50:01', '', '0', '2021-01-19 21:30:00', '63', '', '1', '0', '0', '07198019', '', null, '25', '0.5', '0.5', '56.7', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '755.0999999999999', null, '系统管理员', null, '2021-01-19 21:34:45');
INSERT INTO `aikang_wbillitem` VALUES ('619', 'aikang', '100', '2', '0', '631611059057366aAz', '0', '', '0', null, '20210119', '3', '中医推拿', '55', '16', '张永胜', '0', '', '2000', '2021-01-19 20:24:24', '2021-01-19 20:24:17', '2021-01-19 20:28:41', '', '0', '2021-01-19 20:33:38', '63', '', '1', '0', '0', '07198019', '', null, '16', '0.5', '0.5', '39.6', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '1623.6', null, '系统管理员', null, '2021-01-19 21:34:45');
INSERT INTO `aikang_wbillitem` VALUES ('620', 'aikang', '100', '2', '0', '631611059057366aAz', '0', '', '0', null, '20210119', '6', '刮痧', '55', '16', '张永胜', '0', '', '2001', '2021-01-19 20:24:24', '2021-01-19 21:24:37', '2021-01-19 21:30:57', '', '0', '2021-01-19 21:34:30', '63', '', '1', '0', '0', '07198019', '', null, '22', '1', '0.75', '45', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '1465.1999999999998', null, '系统管理员', null, '2021-01-19 21:34:45');
INSERT INTO `aikang_wbillitem` VALUES ('621', 'aikang', '100', '2', '0', '631611059057366aAz', '0', '', '1', null, '20210119', '3', '中医推拿', '54', '15', '陆建峰', '0', '', '2001', '2021-01-19 20:24:24', '2021-01-19 20:24:17', '2021-01-19 20:36:20', '', '0', '2021-01-19 20:36:30', '63', '', '1', '0', '0', '07198019', '', null, '17.5', '0.5', '0.5', '39.6', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '811.8', null, '系统管理员', null, '2021-01-19 21:34:45');
INSERT INTO `aikang_wbillitem` VALUES ('622', 'aikang', '100', '2', '1', '631611059057366aAz', '0', '', '0', null, '20210119', '1', '中医理疗', '61', '22', '张伟', '0', '', '2000', '2021-01-19 20:24:24', '2021-01-19 20:24:24', '2021-01-19 20:26:04', '', '0', '2021-01-19 20:41:54', '63', '', '1', '0', '0', '07198019', '', null, '22.5', '0.5', '0.5', '56.7', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '1510.1999999999998', null, '系统管理员', null, '2021-01-19 21:34:45');
INSERT INTO `aikang_wbillitem` VALUES ('623', 'aikang', '100', '2', '1', '631611063791503RT2', '0', '', '2', null, '20210119', '15', '精油推拿60分钟', '51', '10', '陈月雪', '0', '', '2001', '2021-01-19 21:43:19', '2021-01-19 21:43:27', '2021-01-19 21:58:22', '', '0', '2021-01-19 21:59:30', '63', '', '1', '0', '0', '95053544', '', null, '22.5', '0.5', '0.5', '64', '', '26', '刘仁飞', '316110544406140005kENkF2M', '1667', null, '系统管理员', null, '2021-01-19 22:03:04');
INSERT INTO `aikang_wbillitem` VALUES ('624', 'aikang', '100', '2', '0', '631611063791503RT2', '0', '', '0', null, '20210119', '3', '中医推拿', '55', '16', '张永胜', '0', '', '2000', '2021-01-19 21:43:19', '2021-01-19 21:35:38', '2021-01-19 21:44:26', '', '0', '2021-01-19 21:45:57', '63', '', '1', '0', '0', '95053544', '', null, '16', '0.5', '0.5', '44', '', '26', '刘仁飞', '316110544406140005kENkF2M', '3512', null, '系统管理员', null, '2021-01-19 22:03:04');
INSERT INTO `aikang_wbillitem` VALUES ('625', 'aikang', '100', '2', '0', '631611063791503RT2', '0', '', '1', null, '20210119', '3', '中医推拿', '54', '15', '陆建峰', '0', '', '2001', '2021-01-19 21:43:19', '2021-01-19 21:35:38', '2021-01-19 22:02:41', '', '0', '2021-01-19 22:03:00', '63', '', '1', '0', '0', '95053544', '', null, '17.5', '0.5', '0.5', '44', '', '26', '刘仁飞', '316110544406140005kENkF2M', '1756', null, '系统管理员', null, '2021-01-19 22:03:04');
INSERT INTO `aikang_wbillitem` VALUES ('626', 'aikang', '100', '2', '0', '631611063791503RT2', '0', '', '0', null, '20210119', '6', '刮痧', '54', '15', '陆建峰', '0', '', '2001', '2021-01-19 21:43:19', '2021-01-19 22:35:58', '2021-01-19 21:58:11', '', '0', '2021-01-19 22:02:30', '63', '', '1', '0', '0', '95053544', '', null, '22', '1', '0.75', '50', '', '26', '刘仁飞', '316110544406140005kENkF2M', '3462', null, '系统管理员', null, '2021-01-19 22:03:04');
INSERT INTO `aikang_wbillitem` VALUES ('627', 'aikang', '100', '2', '1', '631611063791503RT2', '0', '', '0', null, '20210119', '15', '精油推拿60分钟', '49', '8', '杨慧明', '0', '', '2000', '2021-01-19 21:43:19', '2021-01-19 21:43:27', '2021-01-19 21:45:15', '', '0', '2021-01-19 21:56:37', '63', '', '1', '0', '0', '95053544', '', null, '22.5', '0.5', '0.5', '64', '', '26', '刘仁飞', '316110544406140005kENkF2M', '3334', null, '系统管理员', null, '2021-01-19 22:03:04');
INSERT INTO `aikang_wbillitem` VALUES ('628', 'aikang', '100', '2', '1', '631611065028853C7Y', '0', '', '1', null, '20210119', '15', '精油推拿60分钟', '51', '10', '陈月雪', '0', '', '2001', '2021-01-19 22:03:53', '2021-01-19 22:04:06', '2021-01-19 22:19:37', '', '0', '2021-01-19 22:22:30', '63', '', '1', '0', '0', '96985436', '', null, '25', '0.5', '0.5', '57.6', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '595.8', null, '系统管理员', null, '2021-01-19 22:25:21');
INSERT INTO `aikang_wbillitem` VALUES ('629', 'aikang', '100', '2', '0', '631611065028853C7Y', '0', '', '0', null, '20210119', '1', '中医理疗', '55', '16', '张永胜', '0', '', '2000', '2021-01-19 22:03:53', '2021-01-19 22:03:51', '2021-01-19 22:05:08', '', '0', '2021-01-19 22:05:59', '63', '', '1', '0', '0', '96985436', '', null, '23', '0.5', '0.5', '56.7', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '1351.7999999999997', null, '系统管理员', null, '2021-01-19 22:25:21');
INSERT INTO `aikang_wbillitem` VALUES ('630', 'aikang', '100', '2', '0', '631611065028853C7Y', '0', '', '1', null, '20210119', '1', '中医理疗', '45', '2', '小草', '0', '', '2001', '2021-01-19 22:03:53', '2021-01-19 22:03:51', '2021-01-19 22:19:12', '', '0', '2021-01-19 22:22:30', '63', '', '1', '0', '0', '96985436', '', null, '25.5', '0.5', '0.5', '56.7', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '675.8999999999999', null, '系统管理员', null, '2021-01-19 22:25:21');
INSERT INTO `aikang_wbillitem` VALUES ('631', 'aikang', '100', '2', '0', '631611065028853C7Y', '0', '', '0', null, '20210119', '6', '刮痧', '45', '2', '小草', '0', '', '2001', '2021-01-19 22:03:53', '2021-01-19 23:04:11', '2021-01-19 22:23:22', '', '0', '2021-01-19 22:24:00', '63', '', '1', '0', '0', '96985436', '', null, '22', '1', '0.75', '45', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '1306.7999999999997', null, '系统管理员', null, '2021-01-19 22:25:21');
INSERT INTO `aikang_wbillitem` VALUES ('632', 'aikang', '100', '2', '1', '631611065028853C7Y', '0', '', '0', null, '20210119', '15', '精油推拿60分钟', '49', '8', '杨慧明', '0', '', '2000', '2021-01-19 22:03:53', '2021-01-19 22:04:06', '2021-01-19 22:05:19', '', '0', '2021-01-19 22:09:03', '63', '', '1', '0', '0', '96985436', '', null, '22.5', '0.5', '0.5', '57.6', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '1191.6', null, '系统管理员', null, '2021-01-19 22:25:21');
INSERT INTO `aikang_wbillitem` VALUES ('633', 'aikang', '100', '2', '0', '631611067103751RGR', '0', '', '0', null, '20210119', '1', '中医理疗', '61', '22', '张伟', '0', '', '2000', '2021-01-19 22:38:36', '2021-01-19 22:38:25', '2021-01-19 22:41:35', '', '0', '2021-01-19 22:42:43', '63', '', '1', '0', '0', '52781762', '', null, '22.5', '0.5', '0.5', '56.7', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '849.5999999999999', null, '系统管理员', null, '2021-01-19 23:08:44');
INSERT INTO `aikang_wbillitem` VALUES ('634', 'aikang', '100', '2', '1', '631611067103751RGR', '0', '', '0', null, '20210119', '15', '精油推拿60分钟', '59', '28', '阿桃', '0', '', '2001', '2021-01-19 22:38:36', '2021-01-19 22:38:39', '2021-01-19 22:41:44', '', '0', '2021-01-19 23:08:30', '63', '', '1', '0', '0', '52781762', '', null, '45', '1', '1', '115.2', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '734.3999999999999', null, '系统管理员', null, '2021-01-19 23:08:44');
INSERT INTO `aikang_wbillitem` VALUES ('636', 'aikang', '100', '2', '0', '631611069278265jNm', '0', '', '0', null, '20210119', '3', '中医推拿', '60', '6', '张进步', '0', '', '2000', '2021-01-19 23:15:00', '2021-01-19 23:14:49', '2021-01-19 23:16:28', '', '0', '2021-01-19 23:19:18', '63', '', '1', '0', '0', '16963830', '', null, '16', '0.5', '0.5', '39.6', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '655.1999999999998', '1006', '张进步', null, '2021-01-19 23:20:16');
INSERT INTO `aikang_wbillitem` VALUES ('637', 'aikang', '100', '2', '0', '631611069278265jNm', '0', '', '2', null, '20210119', '3', '中医推拿', '44', '1', '梁韵仪', '0', '', '2001', '2021-01-19 23:15:00', '2021-01-19 23:14:49', '2021-01-19 23:20:53', '', '0', '2021-01-19 23:22:30', '63', '', '1', '0', '0', '16963830', '', null, '16', '0.5', '0.5', '39.6', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '655.1999999999998', null, '系统管理员', null, '2021-01-19 23:22:40');
INSERT INTO `aikang_wbillitem` VALUES ('638', 'aikang', '100', '2', '1', '631611069278265jNm', '0', '', '2', null, '20210119', '1', '中医理疗', '53', '12', '露露', '0', '', '2001', '2021-01-19 23:15:00', '2021-01-19 23:14:56', '2021-01-19 23:20:45', '', '0', '2021-01-19 23:22:30', '63', '', '1', '0', '0', '16963830', '', null, '22.5', '0.5', '0.5', '56.7', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '541.7999999999998', null, '系统管理员', null, '2021-01-19 23:22:40');
INSERT INTO `aikang_wbillitem` VALUES ('639', 'aikang', '100', '2', '1', '631611069278265jNm', '0', '', '0', null, '20210119', '1', '中医理疗', '61', '22', '张伟', '0', '', '2000', '2021-01-19 23:15:00', '2021-01-19 23:14:56', '2021-01-19 23:16:55', '', '0', '2021-01-19 23:19:56', '63', '', '1', '0', '0', '16963830', '', null, '22.5', '0.5', '0.5', '56.7', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '541.7999999999998', null, '系统管理员', null, '2021-01-19 23:22:40');
INSERT INTO `aikang_wbillitem` VALUES ('640', 'aikang', '100', '2', '0', '6316110699915859ri', '0', '', '0', null, '20210119', '3', '中医推拿', '44', '1', '梁韵仪', '0', '', '2000', '2021-01-19 23:26:37', '2021-01-19 23:26:45', '2021-01-19 23:27:13', '', '0', '2021-01-19 23:27:56', '63', '', '1', '0', '0', '63159001', '', null, '16', '0.5', '0.5', '39.6', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '462.59999999999985', null, '系统管理员', null, '2021-01-19 23:30:08');
INSERT INTO `aikang_wbillitem` VALUES ('641', 'aikang', '100', '2', '1', '6316110699915859ri', '0', '', '0', null, '20210119', '1', '中医理疗', '54', '15', '陆建峰', '0', '', '2001', '2021-01-19 23:26:37', '2021-01-19 23:26:49', '2021-01-19 23:27:23', '', '0', '2021-01-19 23:30:00', '63', '', '1', '0', '0', '63159001', '', null, '46', '1', '1', '113.4', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '349.1999999999998', null, '系统管理员', null, '2021-01-19 23:30:08');
INSERT INTO `aikang_wbillitem` VALUES ('642', 'aikang', '100', '2', '0', '6316110699915859ri', '0', '', '2', null, '20210119', '3', '中医推拿', '53', '12', '露露', '0', '', '2001', '2021-01-19 23:26:37', '2021-01-19 23:26:45', '2021-01-19 23:28:18', '', '0', '2021-01-19 23:30:00', '63', '', '1', '0', '0', '63159001', '', null, '17', '0.5', '0.5', '39.6', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '462.59999999999985', null, '系统管理员', null, '2021-01-19 23:30:08');
INSERT INTO `aikang_wbillitem` VALUES ('644', 'aikang', '100', '2', '0', '631611114898996dwS', '0', '', '0', null, '20210120', '1', '中医理疗', '54', '15', '陆建峰', '0', '', '2000', '2021-01-20 11:59:35', '2021-01-20 11:55:08', '2021-01-20 12:01:38', '', '0', '2021-01-20 12:11:30', '63', '', '1', '0', '0', '98213400', '', null, '46', '1', '0.5', '113', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '750.8999999999999', null, '系统管理员', null, '2021-01-20 12:17:47');
INSERT INTO `aikang_wbillitem` VALUES ('645', 'aikang', '100', '2', '1', '631611114898996dwS', '0', '', '0', null, '20210120', '15', '精油推拿60分钟', '45', '2', '小草', '0', '', '2000', '2021-01-20 11:59:35', '2021-01-20 11:55:16', '2021-01-20 12:00:50', '', '0', '2021-01-20 12:15:23', '63', '', '1', '0', '0', '98213400', '', null, '22.5', '0.5', '0.5', '57.6', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '749.5999999999998', null, '系统管理员', null, '2021-01-20 12:17:47');
INSERT INTO `aikang_wbillitem` VALUES ('648', 'aikang', '100', '2', '0', '631611116415728kjQ', '0', '', '2', null, '20210120', '1', '中医理疗', '51', '10', '陈月雪', '0', '', '2001', '2021-01-20 12:20:21', '2021-01-20 12:20:27', '2021-01-20 12:22:58', '', '0', '2021-01-20 12:24:00', '63', '', '1', '0', '0', '00346128', '', null, '22.5', '0.5', '0.5', '56.7', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '578.5999999999998', null, '系统管理员', null, '2021-01-20 12:24:08');
INSERT INTO `aikang_wbillitem` VALUES ('649', 'aikang', '100', '2', '0', '631611116415728kjQ', '0', '', '0', null, '20210120', '1', '中医理疗', '55', '16', '张永胜', '0', '', '2000', '2021-01-20 12:20:21', '2021-01-20 12:20:27', '2021-01-20 12:21:11', '', '0', '2021-01-20 12:22:00', '63', '', '1', '0', '0', '00346128', '', null, '23', '0.5', '0.5', '56.7', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '635.2999999999998', null, '系统管理员', null, '2021-01-20 12:24:08');
INSERT INTO `aikang_wbillitem` VALUES ('650', 'aikang', '100', '2', '1', '631611116415728kjQ', '0', '', '0', null, '20210120', '15', '精油推拿60分钟', '46', '3', '三姐', '0', '', '2000', '2021-01-20 12:20:21', '2021-01-20 12:20:33', '2021-01-20 12:21:24', '', '0', '2021-01-20 12:22:27', '63', '', '1', '0', '0', '00346128', '', null, '22.5', '0.5', '0.5', '57.6', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '520.9999999999998', null, '系统管理员', null, '2021-01-20 12:24:08');
INSERT INTO `aikang_wbillitem` VALUES ('651', 'aikang', '100', '2', '1', '631611116415728kjQ', '0', '', '2', null, '20210120', '15', '精油推拿60分钟', '49', '8', '杨慧明', '0', '', '2001', '2021-01-20 12:20:21', '2021-01-20 12:20:33', '2021-01-20 12:23:08', '', '0', '2021-01-20 12:24:00', '63', '', '1', '0', '0', '00346128', '', null, '22.5', '0.5', '0.5', '57.6', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '463.39999999999975', null, '系统管理员', null, '2021-01-20 12:24:08');

-- ----------------------------
-- Table structure for `aikang_workexcitem`
-- ----------------------------
DROP TABLE IF EXISTS `aikang_workexcitem`;
CREATE TABLE `aikang_workexcitem` (
  `id` int NOT NULL AUTO_INCREMENT,
  `company` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `sid` int DEFAULT '0',
  `hid` int DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=259 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of aikang_workexcitem
-- ----------------------------
INSERT INTO `aikang_workexcitem` VALUES ('1', 'aikang', '8', '33');
INSERT INTO `aikang_workexcitem` VALUES ('2', 'aikang', '7', '33');
INSERT INTO `aikang_workexcitem` VALUES ('3', 'aikang', '4', '33');
INSERT INTO `aikang_workexcitem` VALUES ('4', 'aikang', '6', '33');
INSERT INTO `aikang_workexcitem` VALUES ('5', 'aikang', '10', '33');
INSERT INTO `aikang_workexcitem` VALUES ('31', 'aikang', '1', '34');
INSERT INTO `aikang_workexcitem` VALUES ('32', 'aikang', '4', '34');
INSERT INTO `aikang_workexcitem` VALUES ('33', 'aikang', '7', '34');
INSERT INTO `aikang_workexcitem` VALUES ('34', 'aikang', '8', '34');
INSERT INTO `aikang_workexcitem` VALUES ('35', 'aikang', '5', '34');
INSERT INTO `aikang_workexcitem` VALUES ('36', 'aikang', '9', '34');
INSERT INTO `aikang_workexcitem` VALUES ('37', 'aikang', '2', '34');
INSERT INTO `aikang_workexcitem` VALUES ('38', 'aikang', '7', '35');
INSERT INTO `aikang_workexcitem` VALUES ('39', 'aikang', '8', '35');
INSERT INTO `aikang_workexcitem` VALUES ('40', 'aikang', '10', '35');
INSERT INTO `aikang_workexcitem` VALUES ('41', 'aikang', '9', '36');
INSERT INTO `aikang_workexcitem` VALUES ('42', 'aikang', '10', '36');
INSERT INTO `aikang_workexcitem` VALUES ('43', 'aikang', '5', '36');
INSERT INTO `aikang_workexcitem` VALUES ('72', 'aikang', '10', '51');
INSERT INTO `aikang_workexcitem` VALUES ('73', 'aikang', '8', '51');
INSERT INTO `aikang_workexcitem` VALUES ('74', 'aikang', '7', '51');
INSERT INTO `aikang_workexcitem` VALUES ('78', 'aikang', '10', '43');
INSERT INTO `aikang_workexcitem` VALUES ('79', 'aikang', '9', '43');
INSERT INTO `aikang_workexcitem` VALUES ('80', 'aikang', '12', '43');
INSERT INTO `aikang_workexcitem` VALUES ('81', 'aikang', '2', '43');
INSERT INTO `aikang_workexcitem` VALUES ('82', 'aikang', '11', '43');
INSERT INTO `aikang_workexcitem` VALUES ('107', 'aikang', '7', '48');
INSERT INTO `aikang_workexcitem` VALUES ('108', 'aikang', '5', '48');
INSERT INTO `aikang_workexcitem` VALUES ('109', 'aikang', '10', '48');
INSERT INTO `aikang_workexcitem` VALUES ('110', 'aikang', '2', '48');
INSERT INTO `aikang_workexcitem` VALUES ('111', 'aikang', '2', '56');
INSERT INTO `aikang_workexcitem` VALUES ('112', 'aikang', '11', '56');
INSERT INTO `aikang_workexcitem` VALUES ('113', 'aikang', '11', '52');
INSERT INTO `aikang_workexcitem` VALUES ('114', 'aikang', '2', '52');
INSERT INTO `aikang_workexcitem` VALUES ('153', 'aikang', '2', '54');
INSERT INTO `aikang_workexcitem` VALUES ('154', 'aikang', '16', '54');
INSERT INTO `aikang_workexcitem` VALUES ('155', 'aikang', '10', '54');
INSERT INTO `aikang_workexcitem` VALUES ('156', 'aikang', '9', '54');
INSERT INTO `aikang_workexcitem` VALUES ('157', 'aikang', '12', '54');
INSERT INTO `aikang_workexcitem` VALUES ('158', 'aikang', '11', '54');
INSERT INTO `aikang_workexcitem` VALUES ('159', 'aikang', '2', '55');
INSERT INTO `aikang_workexcitem` VALUES ('160', 'aikang', '11', '55');
INSERT INTO `aikang_workexcitem` VALUES ('161', 'aikang', '16', '55');
INSERT INTO `aikang_workexcitem` VALUES ('162', 'aikang', '10', '55');
INSERT INTO `aikang_workexcitem` VALUES ('163', 'aikang', '9', '55');
INSERT INTO `aikang_workexcitem` VALUES ('164', 'aikang', '12', '55');
INSERT INTO `aikang_workexcitem` VALUES ('172', 'aikang', '8', '59');
INSERT INTO `aikang_workexcitem` VALUES ('173', 'aikang', '7', '59');
INSERT INTO `aikang_workexcitem` VALUES ('174', 'aikang', '4', '59');
INSERT INTO `aikang_workexcitem` VALUES ('175', 'aikang', '16', '59');
INSERT INTO `aikang_workexcitem` VALUES ('176', 'aikang', '10', '59');
INSERT INTO `aikang_workexcitem` VALUES ('177', 'aikang', '12', '59');
INSERT INTO `aikang_workexcitem` VALUES ('178', 'aikang', '9', '59');
INSERT INTO `aikang_workexcitem` VALUES ('179', 'aikang', '2', '59');
INSERT INTO `aikang_workexcitem` VALUES ('180', 'aikang', '11', '59');
INSERT INTO `aikang_workexcitem` VALUES ('187', 'aikang', '16', '61');
INSERT INTO `aikang_workexcitem` VALUES ('188', 'aikang', '10', '61');
INSERT INTO `aikang_workexcitem` VALUES ('189', 'aikang', '9', '61');
INSERT INTO `aikang_workexcitem` VALUES ('190', 'aikang', '12', '61');
INSERT INTO `aikang_workexcitem` VALUES ('191', 'aikang', '2', '61');
INSERT INTO `aikang_workexcitem` VALUES ('192', 'aikang', '11', '61');
INSERT INTO `aikang_workexcitem` VALUES ('193', 'aikang', '16', '44');
INSERT INTO `aikang_workexcitem` VALUES ('194', 'aikang', '2', '44');
INSERT INTO `aikang_workexcitem` VALUES ('195', 'aikang', '11', '44');
INSERT INTO `aikang_workexcitem` VALUES ('196', 'aikang', '1', '44');
INSERT INTO `aikang_workexcitem` VALUES ('204', 'aikang', '16', '46');
INSERT INTO `aikang_workexcitem` VALUES ('205', 'aikang', '10', '46');
INSERT INTO `aikang_workexcitem` VALUES ('206', 'aikang', '9', '46');
INSERT INTO `aikang_workexcitem` VALUES ('207', 'aikang', '12', '46');
INSERT INTO `aikang_workexcitem` VALUES ('208', 'aikang', '2', '46');
INSERT INTO `aikang_workexcitem` VALUES ('209', 'aikang', '11', '46');
INSERT INTO `aikang_workexcitem` VALUES ('210', 'aikang', '1', '46');
INSERT INTO `aikang_workexcitem` VALUES ('211', 'aikang', '16', '49');
INSERT INTO `aikang_workexcitem` VALUES ('212', 'aikang', '10', '49');
INSERT INTO `aikang_workexcitem` VALUES ('213', 'aikang', '9', '49');
INSERT INTO `aikang_workexcitem` VALUES ('214', 'aikang', '12', '49');
INSERT INTO `aikang_workexcitem` VALUES ('215', 'aikang', '2', '49');
INSERT INTO `aikang_workexcitem` VALUES ('216', 'aikang', '11', '49');
INSERT INTO `aikang_workexcitem` VALUES ('217', 'aikang', '1', '49');
INSERT INTO `aikang_workexcitem` VALUES ('218', 'aikang', '8', '50');
INSERT INTO `aikang_workexcitem` VALUES ('219', 'aikang', '6', '50');
INSERT INTO `aikang_workexcitem` VALUES ('220', 'aikang', '5', '50');
INSERT INTO `aikang_workexcitem` VALUES ('221', 'aikang', '1', '50');
INSERT INTO `aikang_workexcitem` VALUES ('222', 'aikang', '16', '53');
INSERT INTO `aikang_workexcitem` VALUES ('223', 'aikang', '10', '53');
INSERT INTO `aikang_workexcitem` VALUES ('224', 'aikang', '9', '53');
INSERT INTO `aikang_workexcitem` VALUES ('225', 'aikang', '12', '53');
INSERT INTO `aikang_workexcitem` VALUES ('226', 'aikang', '2', '53');
INSERT INTO `aikang_workexcitem` VALUES ('227', 'aikang', '11', '53');
INSERT INTO `aikang_workexcitem` VALUES ('228', 'aikang', '1', '53');
INSERT INTO `aikang_workexcitem` VALUES ('229', 'aikang', '1', '57');
INSERT INTO `aikang_workexcitem` VALUES ('230', 'aikang', '16', '57');
INSERT INTO `aikang_workexcitem` VALUES ('231', 'aikang', '10', '57');
INSERT INTO `aikang_workexcitem` VALUES ('232', 'aikang', '9', '57');
INSERT INTO `aikang_workexcitem` VALUES ('233', 'aikang', '12', '57');
INSERT INTO `aikang_workexcitem` VALUES ('234', 'aikang', '2', '57');
INSERT INTO `aikang_workexcitem` VALUES ('235', 'aikang', '11', '57');
INSERT INTO `aikang_workexcitem` VALUES ('236', 'aikang', '16', '58');
INSERT INTO `aikang_workexcitem` VALUES ('237', 'aikang', '5', '58');
INSERT INTO `aikang_workexcitem` VALUES ('238', 'aikang', '10', '58');
INSERT INTO `aikang_workexcitem` VALUES ('239', 'aikang', '9', '58');
INSERT INTO `aikang_workexcitem` VALUES ('240', 'aikang', '12', '58');
INSERT INTO `aikang_workexcitem` VALUES ('241', 'aikang', '2', '58');
INSERT INTO `aikang_workexcitem` VALUES ('242', 'aikang', '11', '58');
INSERT INTO `aikang_workexcitem` VALUES ('243', 'aikang', '1', '58');
INSERT INTO `aikang_workexcitem` VALUES ('244', 'aikang', '16', '60');
INSERT INTO `aikang_workexcitem` VALUES ('245', 'aikang', '10', '60');
INSERT INTO `aikang_workexcitem` VALUES ('246', 'aikang', '9', '60');
INSERT INTO `aikang_workexcitem` VALUES ('247', 'aikang', '12', '60');
INSERT INTO `aikang_workexcitem` VALUES ('248', 'aikang', '2', '60');
INSERT INTO `aikang_workexcitem` VALUES ('249', 'aikang', '11', '60');
INSERT INTO `aikang_workexcitem` VALUES ('250', 'aikang', '1', '60');
INSERT INTO `aikang_workexcitem` VALUES ('251', 'aikang', '1', '45');
INSERT INTO `aikang_workexcitem` VALUES ('252', 'aikang', '5', '45');
INSERT INTO `aikang_workexcitem` VALUES ('253', 'aikang', '10', '45');
INSERT INTO `aikang_workexcitem` VALUES ('254', 'aikang', '9', '45');
INSERT INTO `aikang_workexcitem` VALUES ('255', 'aikang', '12', '45');
INSERT INTO `aikang_workexcitem` VALUES ('256', 'aikang', '2', '45');
INSERT INTO `aikang_workexcitem` VALUES ('257', 'aikang', '11', '45');
INSERT INTO `aikang_workexcitem` VALUES ('258', 'aikang', '16', '45');

-- ----------------------------
-- Table structure for `aikang_workextra`
-- ----------------------------
DROP TABLE IF EXISTS `aikang_workextra`;
CREATE TABLE `aikang_workextra` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `company` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `tmid` bigint DEFAULT '0',
  `tmname` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `hid` bigint DEFAULT '0',
  `iswork` int DEFAULT '0',
  `rounde` int DEFAULT '0',
  `rlastdate` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '2020-01-01 00:00:01',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of aikang_workextra
-- ----------------------------
INSERT INTO `aikang_workextra` VALUES ('21', 'aikang', '6', '晚加班', '54', '1', '1', '2021-01-29 14:18:00');
INSERT INTO `aikang_workextra` VALUES ('22', 'aikang', '4', '早加班', '54', '1', '1', '2021-01-29 14:18:00');
INSERT INTO `aikang_workextra` VALUES ('23', 'aikang', '6', '晚加班', '45', '1', '1', '2021-01-29 14:18:00');
INSERT INTO `aikang_workextra` VALUES ('24', 'aikang', '4', '早加班', '45', '1', '1', '2021-01-29 14:18:00');
INSERT INTO `aikang_workextra` VALUES ('25', 'aikang', '6', '晚加班', '44', '1', '1', '2021-01-29 14:18:00');
INSERT INTO `aikang_workextra` VALUES ('26', 'aikang', '4', '早加班', '44', '1', '1', '2021-01-29 14:18:00');

-- ----------------------------
-- Table structure for `aikang_workextrasalaryrecord`
-- ----------------------------
DROP TABLE IF EXISTS `aikang_workextrasalaryrecord`;
CREATE TABLE `aikang_workextrasalaryrecord` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `company` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `seriid` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `workid` bigint DEFAULT '0',
  `workname` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `salarytype` int DEFAULT '0',
  `salarymoney` double DEFAULT '0',
  `typeid` bigint DEFAULT '0',
  `tradename` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `typeseriid` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `salaryname` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `recdate` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `daynum` int DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of aikang_workextrasalaryrecord
-- ----------------------------
INSERT INTO `aikang_workextrasalaryrecord` VALUES ('1', 'aikang', '116085571899450006fKpKsib', '43', '张伟', '0', '5', '19', '', '11608557186591000xcPzjGz4', '办卡提成', '2020-12-21 21:26:26', '0');
INSERT INTO `aikang_workextrasalaryrecord` VALUES ('2', 'aikang', '11608557189945000dWPG5Z3W', '45', '小草', '0', '5', '19', '', '11608557186591000xcPzjGz4', '办卡提成', '2020-12-21 21:26:26', '0');
INSERT INTO `aikang_workextrasalaryrecord` VALUES ('3', 'aikang', '11608557189945000tniKX2cY', '47', '黄贞初', '0', '5', '19', '', '11608557186591000xcPzjGz4', '办卡提成', '2020-12-21 21:26:26', '0');
INSERT INTO `aikang_workextrasalaryrecord` VALUES ('4', 'aikang', '11608557189945000ZH8pNS7p', '48', '刘振霞', '0', '5', '19', '', '11608557186591000xcPzjGz4', '办卡提成', '2020-12-21 21:26:26', '0');
INSERT INTO `aikang_workextrasalaryrecord` VALUES ('5', 'aikang', '11608623116842000byxYpS8S', '43', '张伟', '1', '6.666666666666667', '22', '', '11608557677731000xpaWGMpX', '充值提成', '2020-12-21 21:34:37', '1');
INSERT INTO `aikang_workextrasalaryrecord` VALUES ('6', 'aikang', '11608623116842000s2rFSG6K', '48', '刘振霞', '1', '6.666666666666667', '22', '', '11608557677731000xpaWGMpX', '充值提成', '2020-12-21 21:34:37', '1');
INSERT INTO `aikang_workextrasalaryrecord` VALUES ('7', 'aikang', '11608623116842000XwFBxYFt', '49', '任彩凤', '1', '6.666666666666667', '22', '', '11608557677731000xpaWGMpX', '充值提成', '2020-12-21 21:34:37', '1');
INSERT INTO `aikang_workextrasalaryrecord` VALUES ('8', 'aikang', '11610442476898000XB2YKkPB', '36', '勇哥2', '1', '6.666666666666667', '2', '', '11608123714263000enfTEx2x', '充值提成', '2021-01-12 17:07:56', '20210112');
INSERT INTO `aikang_workextrasalaryrecord` VALUES ('9', 'aikang', '11610442476898000p2MDawFX', '45', '小草', '1', '6.666666666666667', '2', '', '11608123714263000enfTEx2x', '充值提成', '2021-01-12 17:07:56', '20210112');
INSERT INTO `aikang_workextrasalaryrecord` VALUES ('10', 'aikang', '11610442476898000e6S4weJ7', '46', '三姐', '1', '6.666666666666667', '2', '', '11608123714263000enfTEx2x', '充值提成', '2021-01-12 17:07:56', '20210112');

-- ----------------------------
-- Table structure for `aikang_worklist`
-- ----------------------------
DROP TABLE IF EXISTS `aikang_worklist`;
CREATE TABLE `aikang_worklist` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `company` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `hid` bigint DEFAULT NULL,
  `sdx` int DEFAULT '0',
  `sdxlast` int DEFAULT '0',
  `DayidOfsdxMov` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `nmsSum` double DEFAULT '0',
  `nmsSumLast` double DEFAULT '0',
  `state` int DEFAULT NULL,
  `round` int DEFAULT NULL,
  `earliestyytime` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=138 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of aikang_worklist
-- ----------------------------
INSERT INTO `aikang_worklist` VALUES ('119', 'aikang', '48', '18', '18', '', '0', '0', '500', '0', '');
INSERT INTO `aikang_worklist` VALUES ('120', 'aikang', '50', '2', '2', '', '0', '0', '100000', '0', '');
INSERT INTO `aikang_worklist` VALUES ('121', 'aikang', '47', '4', '4', '', '0', '0', '100000', '0', '');
INSERT INTO `aikang_worklist` VALUES ('122', 'aikang', '56', '5', '5', '', '0', '0', '100000', '0', '');
INSERT INTO `aikang_worklist` VALUES ('123', 'aikang', '49', '1', '1', '', '0', '0', '0', '0', '');
INSERT INTO `aikang_worklist` VALUES ('124', 'aikang', '45', '11', '11', '', '0', '0', '0', '0', '');
INSERT INTO `aikang_worklist` VALUES ('125', 'aikang', '59', '7', '7', '', '0', '0', '0', '0', '');
INSERT INTO `aikang_worklist` VALUES ('126', 'aikang', '60', '0', '0', '', '0', '0', '0', '0', '');
INSERT INTO `aikang_worklist` VALUES ('127', 'aikang', '61', '3', '3', '', '0', '0', '0', '0', '');
INSERT INTO `aikang_worklist` VALUES ('128', 'aikang', '58', '6', '6', '', '0', '0', '0', '0', '');
INSERT INTO `aikang_worklist` VALUES ('129', 'aikang', '44', '8', '8', '', '0', '0', '0', '0', '');
INSERT INTO `aikang_worklist` VALUES ('130', 'aikang', '54', '9', '9', '', '0', '0', '0', '0', '');
INSERT INTO `aikang_worklist` VALUES ('131', 'aikang', '53', '10', '10', '', '0', '0', '0', '0', '');
INSERT INTO `aikang_worklist` VALUES ('132', 'aikang', '46', '12', '12', '', '0', '0', '0', '0', '');
INSERT INTO `aikang_worklist` VALUES ('133', 'aikang', '55', '13', '13', '', '0', '0', '0', '0', '');
INSERT INTO `aikang_worklist` VALUES ('134', 'aikang', '51', '14', '14', '', '0', '0', '0', '0', '');
INSERT INTO `aikang_worklist` VALUES ('135', 'aikang', '52', '15', '15', '', '0', '0', '100000', '0', '');
INSERT INTO `aikang_worklist` VALUES ('136', 'aikang', '57', '16', '16', '', '0', '0', '100000', '0', '');
INSERT INTO `aikang_worklist` VALUES ('137', 'aikang', '43', '17', '17', '', '0', '0', '100000', '0', '');

-- ----------------------------
-- Table structure for `cron`
-- ----------------------------
DROP TABLE IF EXISTS `cron`;
CREATE TABLE `cron` (
  `id` int NOT NULL,
  `cron` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of cron
-- ----------------------------
INSERT INTO `cron` VALUES ('1', '0/30 * * * * ?');

-- ----------------------------
-- Table structure for `crontask`
-- ----------------------------
DROP TABLE IF EXISTS `crontask`;
CREATE TABLE `crontask` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `company` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `tabe` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `tabeid` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `last` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `cycle` int DEFAULT '100',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of crontask
-- ----------------------------
INSERT INTO `crontask` VALUES ('11', 'aikang', 'waiteritem', '377', '20201017065814', '10');
INSERT INTO `crontask` VALUES ('12', 'aikang', 'waiteritem', '383', '20201017065814', '10');
INSERT INTO `crontask` VALUES ('13', 'aikang', 'waiteritem', '376', '20201017065814', '10');

-- ----------------------------
-- Table structure for `guke`
-- ----------------------------
DROP TABLE IF EXISTS `guke`;
CREATE TABLE `guke` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT 'hrID',
  `memid` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '员工ID',
  `socialnumber` varchar(32) DEFAULT NULL,
  `name` varchar(32) DEFAULT NULL COMMENT '姓名',
  `sex` varchar(32) DEFAULT NULL,
  `servicecode` varchar(32) DEFAULT NULL,
  `phone` char(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '手机号码',
  `telephone` varchar(16) DEFAULT NULL COMMENT '住宅电话',
  `address` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '联系地址',
  `enabled` tinyint(1) DEFAULT '1',
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户名',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '密码',
  `passwordtest` varchar(256) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `userface` varchar(255) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `cloudid` bigint unsigned DEFAULT '0',
  `level` int DEFAULT '0',
  `companytest` varchar(256) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `wndtype` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `wxsessioncode` varchar(256) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `wxopenid` varchar(256) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `wxsessiontempkey` varchar(256) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `isteled` int DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `memid_1` (`memid`,`servicecode`,`phone`,`username`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of guke
-- ----------------------------
INSERT INTO `guke` VALUES ('33', '001', '650104197611259016', '刘仁飞', 'sexm', '79', '18620889919', null, null, '1', '001', '$2a$10$wQVL8zqPpa/1wvEZOcWAoOQ3XFfV3muDUAWp2jfTMWPQtawWmj1IG', null, null, '板板', null, '0', null, null, null, '', '', '0');
INSERT INTO `guke` VALUES ('34', '002', '', '卫七妹', 'sexw', '77', '14533422323', null, '', '1', '002', '$2a$10$wQVL8zqPpa/1wvEZOcWAoOQ3XFfV3muDUAWp2jfTMWPQtawWmj1IG', '202cb962ac59075b964b07152d234b70', null, '', null, '0', 'aikang', null, null, '', '', '0');
INSERT INTO `guke` VALUES ('35', '003', '251212198901084257', '小兰', 'sexw', '82', '18522673578', null, null, '1', '003', '$2a$10$wQVL8zqPpa/1wvEZOcWAoOQ3XFfV3muDUAWp2jfTMWPQtawWmj1IG', null, null, '兰兰', null, '0', null, null, null, '', '', '0');
INSERT INTO `guke` VALUES ('36', '004', '6501041978552565652', '勇哥2', 'sexm', '76', '18122562363', null, '发放', '1', '004', '$2a$10$wQVL8zqPpa/1wvEZOcWAoOQ3XFfV3muDUAWp2jfTMWPQtawWmj1IG', null, null, '收到12', null, '0', null, null, null, '', '', '0');
INSERT INTO `guke` VALUES ('42', '007', '56665445588544545454', '勇哥1', 'sexm', '73', '16523696568', null, null, '1', '007', '$2a$10$k3gEccvvOKyfWJiYwLu1pOoBbaY49tEO7iL3jL7yqU6yLF7kG8nJa', null, null, '12', null, '0', null, null, null, '', '', '0');
INSERT INTO `guke` VALUES ('43', '006', '650125423655422595542', '张伟', 'sexm', '22', '16582567435', null, null, '1', '006', '$2a$10$C71FUlmpmVIUanV1gFzTPuxNxPBQeHDqe2m7D/7JQETO5NFPtUWre', null, null, '色', null, '0', null, null, null, '', '', '0');
INSERT INTO `guke` VALUES ('44', '1001', '65554458854454', '刘鹏', 'sexm', '1', '12512554455', null, null, '1', '1001', '$2a$10$5zUfbw9.FaHouldb3tk4guFmRfAkWaH1B3K2e2y6w4dqANaHzdOi6', null, null, '湖北', null, '0', null, null, null, '', '', '0');
INSERT INTO `guke` VALUES ('45', '1002', '234123412342134', '小草', 'sexw', '2', '23322121112', null, '121', '1', '1002', '$2a$10$IBHBh.FWx.Syukd7dbR01e/treda9PifpgppS2AMXvBmrz0V2UcBK', '202cb962ac59075b964b07152d234b70', null, '请问温柔', null, '0', 'aikang', null, null, '', '', '0');
INSERT INTO `guke` VALUES ('46', '1003', '', '三姐', 'sexw', '3', '12122211222', null, '', '1', '1003', '$2a$10$JRVGKDrS4Q7WRRvS81NCzutkCTqpLbJ9L8FCmEU1IcembynyeSGSm', null, null, '', null, '0', null, null, null, '', '', '0');
INSERT INTO `guke` VALUES ('47', '1005', '', '黄贞初', 'sexm', '5', '', null, null, '1', '1005', '$2a$10$Fbq6we5S2fv.vAytvIkM6ugw1dvvGoofzscTA.fOzAlYriZRvKSSS', null, null, '', null, '0', null, null, null, '', '', '0');
INSERT INTO `guke` VALUES ('48', '1007', '', '刘振霞', 'sexw', '7', '121122', null, null, '1', '1007', '$2a$10$235Hsho7VYacd5zmtGIg.eoevPjqeGWKE9zsHGCNuje.RL/YlOUbK', null, null, '', null, '0', null, null, null, '', '', '0');
INSERT INTO `guke` VALUES ('49', '1008', '', '任彩凤', 'sexw', '8', '2222111', null, null, '1', '1008', '$2a$10$bhqAafDS0i67zIBq0RRU2e0mOCYaubLXMzRuREuGyBIU8HqfBdT3G', null, null, '', null, '0', null, null, null, '', '', '0');
INSERT INTO `guke` VALUES ('50', '1009', '', '黄君慧', 'sexw', '9', '1221', null, null, '1', '1009', '$2a$10$LTB21jd1b87S0J3uzXwyxeA4.mgKQnP7H3rxjQFHzXd5Ftt.Tlvai', null, null, '', null, '0', null, null, null, '', '', '0');
INSERT INTO `guke` VALUES ('51', '1010', '', '余玉华', 'sexm', '10', '211', null, null, '1', '1010', '$2a$10$wzrA6kSZ2w0KBWo7E1IhE.NAPY/8I0uqYNtiugqnwXfKfx4XzJ9v.', '202cb962ac59075b964b07152d234b70', null, '', null, '0', 'aikang', null, null, '', '', '0');
INSERT INTO `guke` VALUES ('52', '1011', '', '罗永泽', 'sexm', '11', '12222', null, null, '1', '1011', '$2a$10$fCI60eH4vKsMEvIl5Z1Xp.pJQkDxZuI4YZI8ZWPJjZvkWa.Zo1nFm', null, null, '', null, '0', null, null, null, '', '', '0');
INSERT INTO `guke` VALUES ('53', '1012', '', '江红', 'sexw', '12', '1254454', null, null, '1', '1012', '$2a$10$DaBKuIurPM4PSJTwsfF9i./Nh.perfNL/XlHuicoSZuELzQBHo8wK', null, null, '', null, '0', null, null, null, '', '', '0');
INSERT INTO `guke` VALUES ('54', '1015', '', '陆建峰', 'sexm', '15', '22', null, null, '1', '1015', '$2a$10$D0bB57ab4Ev0VQc7615iK.mxbYehuhcMBtLYuXcqqDI4PYXtN7MIS', null, null, '', null, '0', null, null, null, '', '', '0');
INSERT INTO `guke` VALUES ('55', '1016', '', '胡崇飞', 'sexw', '16', '6', null, null, '1', '1016', '$2a$10$/ELiOvYoXGFIzmWr5ldYt.Qh/jOBfZQen44CloQBxwRVXaKySFjXG', null, null, '', null, '0', null, null, null, '', '', '0');
INSERT INTO `guke` VALUES ('56', '1018', '', '董明武', 'sexm', '18', '18', null, null, '1', '1018', '$2a$10$dN7tX.uouxoOUCo2AWU12uShsAs6kR2dZyhzDwUiZ9.NVIa9Q5c3u', null, null, '', null, '0', null, null, null, '', '', '0');
INSERT INTO `guke` VALUES ('57', '1019', '', '张长铁', 'sexw', '19', '19', null, null, '1', '1019', '$2a$10$yeEQ60i8VYMQyAHOuXd6e.Kwen4RSWEXn6iW757nEdtsU1MRJaBIW', null, null, '', null, '0', null, null, null, '', '', '0');
INSERT INTO `guke` VALUES ('58', '1020', '', '陈海涛', 'sexw', '20', '20', null, null, '1', '1020', '$2a$10$bEdnhhb21nBzn0h3hLCmx.3eRSJk1M6/8tqdBYSVFCs29tncBbCxq', null, null, '', null, '0', null, null, null, '', '', '0');
INSERT INTO `guke` VALUES ('63', null, null, null, null, null, null, '18620889919', null, '1', 'ohWkG5i8D272swy28pfqgnRitHA0', '$2a$10$vetuJio.pRosWRW44OoB3uK2WmA.DSk4jjg10TzH.FciPCIwnS7yK', '1lF5m+ehEFwFDTo5HxRcMw==', null, null, null, '0', '', 'wxweb', '', 'ohWkG5i8D272swy28pfqgnRitHA0', '1lF5m+ehEFwFDTo5HxRcMw==', '1');

-- ----------------------------
-- Table structure for `gukeofen`
-- ----------------------------
DROP TABLE IF EXISTS `gukeofen`;
CREATE TABLE `gukeofen` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `seriid` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `company` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `username` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `lasttime` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=116 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of gukeofen
-- ----------------------------
INSERT INTO `gukeofen` VALUES ('115', '631611912053448000Zx7zQ1ht', 'aikang', 'ohWkG5i8D272swy28pfqgnRitHA0', '2021-01-29 17:29:44');

-- ----------------------------
-- Table structure for `gukeshop`
-- ----------------------------
DROP TABLE IF EXISTS `gukeshop`;
CREATE TABLE `gukeshop` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `ordertype` int DEFAULT '100',
  `gukenum` int DEFAULT '0' COMMENT '房间id',
  `gukeidx` int DEFAULT '0' COMMENT '房间名称',
  `billnumber` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `serinumber` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `daynumber` int DEFAULT '0',
  `wtype` int DEFAULT '0' COMMENT '排钟方式',
  `wsex` int DEFAULT '0',
  `wlev` int DEFAULT '0',
  `company` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `rmid` bigint DEFAULT '0',
  `rmname` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '房间名称',
  `sid` bigint DEFAULT '0' COMMENT '服务项目ID',
  `sname` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '' COMMENT '服务项目名称',
  `clocknumyy` double DEFAULT NULL COMMENT '支付状态',
  `itembillyf` double DEFAULT '0',
  `itembillys` double DEFAULT '0',
  `itembillzk` double DEFAULT '1',
  `itembilljm` double DEFAULT '0',
  `itembilldk` double DEFAULT '0',
  `hid` bigint DEFAULT '0' COMMENT '技师ID',
  `hcode` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '' COMMENT '技师拍钟号',
  `hname` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '' COMMENT '技师名称',
  `workstate` int DEFAULT '0',
  `waitestate` int DEFAULT '0',
  `maketime` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '2000-01-01 00:00:00',
  `waittime` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '2000-01-01 00:00:00',
  `worktime` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `finishtime` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `kid` bigint unsigned DEFAULT '0',
  `remark` varchar(256) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `kname` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `paystate` int DEFAULT '0',
  `paynum` double DEFAULT '0',
  `payid` bigint DEFAULT '0',
  `checkcode` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `memid` bigint DEFAULT '0',
  `memname` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `memcode` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `hyrmoney` double DEFAULT '0',
  `checktime` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=836 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of gukeshop
-- ----------------------------
INSERT INTO `gukeshop` VALUES ('834', '100', '2', '0', '631611653501041000', '631611653501041000mY280pXP', '20210126', '0', '0', '0', 'aikang', '0', '', '3', '中医推拿', '1', '88', '88', '1', '0', '0', '-1', '', '', '0', '0', '2021-01-26 17:31:41', '2021-01-26 17:31:58', '', '', '63', '', '', '0', '0', '0', '', '0', '', '', '0', '');
INSERT INTO `gukeshop` VALUES ('835', '100', '2', '1', '631611653585920000', '6316116535859200004j51jY26', '20210126', '0', '0', '0', 'aikang', '0', '', '1', '中医理疗', '1', '126', '126', '1', '0', '0', '-1', '', '', '0', '0', '2021-01-26 17:33:05', '2021-01-26 17:32:44', '', '', '63', '', '', '0', '0', '0', '', '0', '', '', '0', '');

-- ----------------------------
-- Table structure for `gukeshoprecord`
-- ----------------------------
DROP TABLE IF EXISTS `gukeshoprecord`;
CREATE TABLE `gukeshoprecord` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `ordertype` int DEFAULT '100',
  `gukenum` int DEFAULT '0' COMMENT '房间id',
  `gukeidx` int DEFAULT '0' COMMENT '房间名称',
  `billnumber` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `serinumber` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `daynumber` int DEFAULT '0',
  `wtype` int DEFAULT '0' COMMENT '排钟方式',
  `wsex` int DEFAULT '0',
  `wlev` int DEFAULT '0',
  `company` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `rmid` bigint DEFAULT '0',
  `rmname` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '房间名称',
  `sid` bigint DEFAULT '0' COMMENT '服务项目ID',
  `sname` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '' COMMENT '服务项目名称',
  `clocknumyy` double DEFAULT NULL COMMENT '支付状态',
  `itembillyf` double DEFAULT '0',
  `itembillys` double DEFAULT '0',
  `itembillzk` double DEFAULT '1',
  `itembilljm` double DEFAULT '0',
  `itembilldk` double DEFAULT '0',
  `hid` bigint DEFAULT '0' COMMENT '技师ID',
  `hcode` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '' COMMENT '技师拍钟号',
  `hname` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '' COMMENT '技师名称',
  `workstate` int DEFAULT '0',
  `waitestate` int DEFAULT '0',
  `maketime` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '2000-01-01 00:00:00',
  `waittime` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '2000-01-01 00:00:00',
  `worktime` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `finishtime` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `kid` bigint unsigned DEFAULT '0',
  `remark` varchar(256) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `kname` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `paystate` int DEFAULT '0',
  `paynum` double DEFAULT '0',
  `payid` bigint DEFAULT '0',
  `checkcode` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `memid` bigint DEFAULT '0',
  `memname` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `memcode` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `hyrmoney` double DEFAULT '0',
  `checktime` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=815 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of gukeshoprecord
-- ----------------------------
INSERT INTO `gukeshoprecord` VALUES ('699', '100', '2', '0', '631606977673148KjX', '1606977665569000HHSGmCX5', '20201203', '0', '0', '0', 'aikang', '0', '', '5', '拔罐', '1', '35', '35', '1', '0', '0', '-1', '', '', '3', '0', '2020-12-03 14:41:05', '2020-12-03 14:41:24', '', '', '63', '', '', '1', '0.7', '63', '56299596', '0', '', '', '0', '2020-12-03 14:41:43');
INSERT INTO `gukeshoprecord` VALUES ('700', '100', '2', '1', '631606977673148KjX', '1606977670547000KmQ3marZ', '20201203', '0', '0', '0', 'aikang', '0', '', '5', '拔罐', '1', '35', '35', '1', '0', '0', '-1', '', '', '3', '0', '2020-12-03 14:41:10', '2020-12-03 14:41:28', '', '', '63', '', '', '1', '0.7', '63', '56299596', '0', '', '', '0', '2020-12-03 14:41:43');
INSERT INTO `gukeshoprecord` VALUES ('701', '100', '3', '0', '631606987706194pX4', '1606987683959000E5nPnPbQ', '20201203', '0', '0', '0', 'aikang', '0', '', '5', '拔罐', '1', '35', '35', '1', '0', '0', '-1', '', '', '3', '0', '2020-12-03 17:28:03', '2020-12-03 17:28:22', '', '', '63', '', '', '1', '1.05', '63', '07181291', '0', '', '', '0', '2020-12-03 17:29:58');
INSERT INTO `gukeshoprecord` VALUES ('702', '100', '3', '1', '631606987706194pX4', '1606987696309000aaciRkfS', '20201203', '0', '0', '0', 'aikang', '0', '', '5', '拔罐', '1', '35', '35', '1', '0', '0', '-1', '', '', '3', '0', '2020-12-03 17:28:16', '2020-12-03 17:28:34', '', '', '63', '', '', '1', '1.05', '63', '07181291', '0', '', '', '0', '2020-12-03 17:29:58');
INSERT INTO `gukeshoprecord` VALUES ('703', '100', '3', '2', '631606987706194pX4', '160698770343200028XKJFpb', '20201203', '0', '0', '0', 'aikang', '0', '', '5', '拔罐', '1', '35', '35', '1', '0', '0', '-1', '', '', '3', '0', '2020-12-03 17:28:23', '2020-12-03 17:28:40', '', '', '63', '', '', '1', '1.05', '63', '07181291', '0', '', '', '0', '2020-12-03 17:29:58');
INSERT INTO `gukeshoprecord` VALUES ('704', '100', '3', '0', '631607161707580NG6', '1607161572758000Ti75HBHA', '20201205', '0', '0', '0', 'aikang', '0', '', '1', '中医理疗', '1.5', '189', '189', '1', '0', '0', '-1', '', '', '3', '0', '2020-12-05 17:46:12', '2020-12-05 17:46:31', '', '', '63', '', '', '1', '189', '63', '15898218', '0', '', '', '0', '2020-12-07 23:26:33');
INSERT INTO `gukeshoprecord` VALUES ('705', '100', '3', '0', '631607161707580NG6', '1607161577965000NNDnkfZS', '20201205', '0', '0', '0', 'aikang', '0', '', '5', '拔罐', '1', '35', '35', '1', '0', '0', '-1', '', '', '3', '0', '2020-12-05 17:46:17', '2020-12-05 18:46:51', '', '', '63', '', '', '1', '35', '63', '15898218', '0', '', '', '0', '2020-12-07 23:26:33');
INSERT INTO `gukeshoprecord` VALUES ('706', '100', '3', '1', '631607161707580NG6', '1607161601618000d8Q4DTTZ', '20201205', '0', '0', '0', 'aikang', '0', '', '3', '中医推拿', '1', '88', '86', '1', '0', '0', '-1', '', '', '3', '0', '2020-12-05 17:46:41', '2020-12-05 17:46:59', '', '', '63', '', '', '1', '86', '63', '15898218', '0', '', '', '0', '2020-12-07 23:26:33');
INSERT INTO `gukeshoprecord` VALUES ('707', '100', '3', '2', '631607161707580NG6', '1607161705422000dBWw4wMM', '20201205', '0', '0', '0', 'aikang', '0', '', '7', '艾草沐足', '1', '88', '86', '1', '0', '0', '-1', '', '', '3', '0', '2020-12-05 17:48:25', '2020-12-05 17:48:44', '', '', '63', '', '', '1', '86', '63', '15898218', '0', '', '', '0', '2020-12-07 23:26:33');
INSERT INTO `gukeshoprecord` VALUES ('708', '100', '0', '2', '631607161707580NG6', '1607358670364000wpyaibkw', '20201205', '0', '0', '0', 'aikang', '0', '', '6', '刮痧', '1', '46', '46', '1', '0', '0', '-1', '', '', '3', '0', '2020-12-08 00:31:10', '2020-12-08 00:31:28', '', '', '63', '', '', '1', '46', '63', '', '0', '', '', '0', '2020-12-08 00:32:18');
INSERT INTO `gukeshoprecord` VALUES ('709', '100', '0', '2', '631607161707580NG6', '631607401859554000Frn5irQW', '20201205', '0', '0', '0', 'aikang', '0', '', '7', '艾草沐足', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2020-12-08 12:30:59', '2020-12-08 12:31:18', '', '', '63', '', '', '1', '88', '63', '', '0', '', '', '0', '2020-12-08 13:06:06');
INSERT INTO `gukeshoprecord` VALUES ('710', '100', '0', '2', '631607161707580NG6', '631607401865687000mhz5MFS7', '20201205', '0', '0', '0', 'aikang', '0', '', '3', '中医推拿', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2020-12-08 12:31:05', '2020-12-08 13:31:38', '', '', '63', '', '', '1', '88', '63', '', '0', '', '', '0', '2020-12-08 13:06:06');
INSERT INTO `gukeshoprecord` VALUES ('711', '100', '0', '2', '631607161707580NG6', '6316074018891540002ySYr7Tw', '20201205', '0', '0', '0', 'aikang', '0', '', '4', '中药沐足', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2020-12-08 12:31:29', '2020-12-08 14:31:58', '', '', '63', '', '', '1', '88', '63', '', '0', '', '', '0', '2020-12-08 13:06:06');
INSERT INTO `gukeshoprecord` VALUES ('712', '100', '0', '2', '631607161707580NG6', '631607401907658000E2zAN7EM', '20201205', '0', '0', '0', 'aikang', '0', '', '6', '刮痧', '1', '50', '50', '1', '0', '0', '-1', '', '', '3', '0', '2020-12-08 12:31:47', '2020-12-08 15:32:18', '', '', '63', '', '', '1', '50', '63', '', '0', '', '', '0', '2020-12-08 13:06:06');
INSERT INTO `gukeshoprecord` VALUES ('713', '100', '0', '0', '631607161707580NG6', '631607401930482000x27dz7m4', '20201205', '0', '0', '0', 'aikang', '0', '', '3', '中医推拿', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2020-12-08 12:32:10', '2020-12-08 12:32:29', '', '', '63', '', '', '1', '88', '63', '', '0', '', '', '0', '2020-12-08 13:06:06');
INSERT INTO `gukeshoprecord` VALUES ('714', '100', '0', '0', '631607161707580NG6', '631607401939913000msmKB4zt', '20201205', '0', '0', '0', 'aikang', '0', '', '4', '中药沐足', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2020-12-08 12:32:19', '2020-12-08 13:32:49', '', '', '63', '', '', '1', '88', '63', '', '0', '', '', '0', '2020-12-08 13:06:06');
INSERT INTO `gukeshoprecord` VALUES ('715', '100', '0', '2', '631607161707580NG6', '631607401956600000Pb6y8G2f', '20201205', '0', '0', '0', 'aikang', '0', '', '4', '中药沐足', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2020-12-08 12:32:36', '2020-12-08 15:57:38', '', '', '63', '', '', '1', '88', '63', '', '0', '', '', '0', '2020-12-08 13:06:06');
INSERT INTO `gukeshoprecord` VALUES ('716', '100', '0', '2', '631607161707580NG6', '631607412091923000ekpEDFP3', '20201205', '0', '0', '0', 'aikang', '0', '', '6', '刮痧', '1', '50', '50', '1', '0', '0', '-1', '', '', '3', '0', '2020-12-08 15:21:31', '2020-12-08 16:57:58', '', '', '63', '', '', '0', '0', '0', '', '0', '', '', '0', '');
INSERT INTO `gukeshoprecord` VALUES ('717', '100', '3', '0', '631608280340584S8w', '631608280265586000iSCrF2AK', '20201218', '0', '0', '0', 'aikang', '0', '', '3', '中医推拿', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2020-12-18 16:31:05', '2020-12-18 16:31:23', '', '', '63', '', '', '1', '3.14', '63', '55109900', '0', '', '', '0', '2020-12-18 16:36:43');
INSERT INTO `gukeshoprecord` VALUES ('718', '100', '3', '0', '631608280340584S8w', '631608280268190000m3GEKt3R', '20201218', '0', '0', '0', 'aikang', '0', '', '4', '中药沐足', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2020-12-18 16:31:08', '2020-12-18 17:31:43', '', '', '63', '', '', '1', '3.14', '63', '55109900', '0', '', '', '0', '2020-12-18 16:36:43');
INSERT INTO `gukeshoprecord` VALUES ('719', '100', '3', '1', '631608280340584S8w', '631608280278048000iDzmZrPr', '20201218', '0', '0', '0', 'aikang', '0', '', '6', '刮痧', '1', '50', '50', '1', '0', '0', '-1', '', '', '3', '0', '2020-12-18 16:31:18', '2020-12-18 16:31:34', '', '', '63', '', '', '1', '3.14', '63', '55109900', '0', '', '', '0', '2020-12-18 16:36:43');
INSERT INTO `gukeshoprecord` VALUES ('720', '100', '3', '2', '631608280340584S8w', '631608280339214000hfhf87iw', '20201218', '0', '0', '0', 'aikang', '0', '', '4', '中药沐足', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2020-12-18 16:32:19', '2020-12-18 16:32:37', '', '', '63', '', '', '1', '3.14', '63', '55109900', '0', '', '', '0', '2020-12-18 16:36:43');
INSERT INTO `gukeshoprecord` VALUES ('721', '100', '2', '0', '631609657079254pZp', '631609319947022000ZjHn28ZP', '20201230', '0', '0', '0', 'aikang', '0', '', '3', '中医推拿', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2020-12-30 17:19:07', '2020-12-30 17:19:24', '', '', '63', '', '', '1', '88', '4', '69532766', '0', '', '', '0', '2021-01-03 16:08:30');
INSERT INTO `gukeshoprecord` VALUES ('722', '100', '2', '1', '631609665528998cHE', '6316096655113380007DMZM6DG', '20210103', '0', '0', '0', 'aikang', '0', '', '3', '中医推拿', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-03 17:18:31', '2021-01-03 17:18:49', '', '', '63', '', '', '1', '176', '4', '46172831', '0', '', '', '0', '2021-01-03 17:23:36');
INSERT INTO `gukeshoprecord` VALUES ('723', '100', '2', '0', '631609665528998cHE', '631609665522411000kXpByPCA', '20210103', '0', '0', '0', 'aikang', '0', '', '7', '艾草沐足', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-03 17:18:42', '2021-01-03 17:19:01', '', '', '63', '', '', '1', '176', '4', '46172831', '0', '', '', '0', '2021-01-03 17:23:36');
INSERT INTO `gukeshoprecord` VALUES ('724', '100', '4', '0', '631610366270873PRw', '631610361440330000Wz6StKFy', '20210111', '0', '0', '0', 'aikang', '0', '', '3', '中医推拿', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-11 18:37:20', '2021-01-11 18:37:32', '', '', '63', '', '', '1', '7.34', '63', '01003163', '0', '', '', '0', '2021-01-12 14:40:53');
INSERT INTO `gukeshoprecord` VALUES ('725', '100', '4', '1', '631610366270873PRw', '631610361446291000hk7FT8KZ', '20210111', '0', '0', '0', 'aikang', '0', '', '3', '中医推拿', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-11 18:37:26', '2021-01-11 18:37:40', '', '', '63', '', '', '1', '7.34', '63', '01003163', '0', '', '', '0', '2021-01-12 14:40:53');
INSERT INTO `gukeshoprecord` VALUES ('726', '100', '4', '2', '631610366270873PRw', '6316103614539770006jAdetxc', '20210111', '0', '0', '0', 'aikang', '0', '', '3', '中医推拿', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-11 18:37:33', '2021-01-11 18:37:48', '', '', '63', '', '', '1', '7.34', '63', '01003163', '0', '', '', '0', '2021-01-12 14:40:53');
INSERT INTO `gukeshoprecord` VALUES ('727', '100', '4', '3', '631610366270873PRw', '631610361469035000ZxsXkd6Q', '20210111', '0', '0', '0', 'aikang', '0', '', '3', '中医推拿', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-11 18:37:49', '2021-01-11 18:38:03', '', '', '63', '', '', '1', '7.34', '63', '01003163', '0', '', '', '0', '2021-01-12 14:40:53');
INSERT INTO `gukeshoprecord` VALUES ('728', '100', '4', '0', '631610366270873PRw', '631610361480715000fM5yjzna', '20210111', '0', '0', '0', 'aikang', '0', '', '6', '刮痧', '1', '50', '50', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-11 18:38:00', '2021-01-11 19:37:52', '', '', '63', '', '', '1', '7.34', '63', '01003163', '0', '', '', '0', '2021-01-12 14:40:53');
INSERT INTO `gukeshoprecord` VALUES ('729', '100', '4', '1', '631610366270873PRw', '631610361490907000kkiwdbiB', '20210111', '0', '0', '0', 'aikang', '0', '', '8', '老姜足疗', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-11 18:38:10', '2021-01-11 19:38:00', '', '', '63', '', '', '1', '7.34', '63', '01003163', '0', '', '', '0', '2021-01-12 14:40:53');
INSERT INTO `gukeshoprecord` VALUES ('730', '100', '4', '2', '631610366270873PRw', '631610361505641000XzdQ8SC2', '20210111', '0', '0', '0', 'aikang', '0', '', '4', '中药沐足', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-11 18:38:25', '2021-01-11 19:38:08', '', '', '63', '', '', '1', '7.34', '63', '01003163', '0', '', '', '0', '2021-01-12 14:40:53');
INSERT INTO `gukeshoprecord` VALUES ('731', '100', '4', '3', '631610366270873PRw', '631610361519801000sjW3exTA', '20210111', '0', '0', '0', 'aikang', '0', '', '7', '艾草沐足', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-11 18:38:39', '2021-01-11 19:38:23', '', '', '63', '', '', '1', '7.34', '63', '01003163', '0', '', '', '0', '2021-01-12 14:40:53');
INSERT INTO `gukeshoprecord` VALUES ('732', '100', '4', '3', '631610366270873PRw', '631610361527843000jhi8HrNe', '20210111', '0', '0', '0', 'aikang', '0', '', '9', '砭石灸', '1', '68', '68', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-11 18:38:47', '2021-01-11 20:38:43', '', '', '63', '', '', '1', '7.34', '63', '01003163', '0', '', '', '0', '2021-01-12 14:40:53');
INSERT INTO `gukeshoprecord` VALUES ('733', '100', '0', '0', '631610366270873PRw', '631610443463527000WFHP6FcP', '20210111', '0', '0', '0', 'aikang', '0', '', '5', '拔罐', '1', '35', '35', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-12 17:24:23', '2021-01-12 17:24:37', '', '', '63', '', '', '1', '35', '2', '', '0', '', '', '0', '2021-01-12 17:24:49');
INSERT INTO `gukeshoprecord` VALUES ('734', '100', '0', '1', '631610366270873PRw', '631610443869979000FypP4zeD', '20210111', '0', '0', '0', 'aikang', '0', '', '5', '拔罐', '1', '35', '35', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-12 17:31:09', '2021-01-12 17:31:25', '', '', '63', '', '', '1', '31.5', '2', '', '0', '', '', '0', '2021-01-12 17:31:33');
INSERT INTO `gukeshoprecord` VALUES ('735', '100', '2', '0', '631610512766971Tii', '631610512583745000wdThHzzn', '20210113', '0', '0', '0', 'aikang', '0', '', '3', '中医推拿', '1', '68', '68', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-13 12:36:23', '2021-01-13 12:36:40', '', '', '63', '', '', '1', '61.2', '2', '67569497', '0', '', '', '0', '2021-01-13 12:40:44');
INSERT INTO `gukeshoprecord` VALUES ('736', '100', '2', '1', '631610512766971Tii', '631610512600225000xJHTyhph', '20210113', '0', '0', '0', 'aikang', '0', '', '8', '老姜足疗', '1', '68', '68', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-13 12:36:40', '2021-01-13 12:36:49', '', '', '63', '', '', '1', '61.2', '2', '67569497', '0', '', '', '0', '2021-01-13 12:40:44');
INSERT INTO `gukeshoprecord` VALUES ('737', '100', '2', '0', '631610518887744MAk', '631610518803411000SJazrzZt', '20210113', '0', '0', '0', 'aikang', '0', '', '2', '采耳', '1', '50', '50', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-13 14:20:03', '2021-01-13 14:20:21', '', '', '63', '', '', '1', '50', '63', '45543386', '0', '', '', '0', '2021-01-13 14:27:38');
INSERT INTO `gukeshoprecord` VALUES ('738', '100', '2', '0', '631610518887744MAk', '631610518808448000TcWRSjSB', '20210113', '0', '0', '0', 'aikang', '0', '', '8', '老姜足疗', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-13 14:20:08', '2021-01-13 14:45:41', '', '', '63', '', '', '1', '88', '63', '45543386', '0', '', '', '0', '2021-01-13 14:27:38');
INSERT INTO `gukeshoprecord` VALUES ('739', '100', '2', '1', '631610518887744MAk', '631610518819390000Knj5Cn8a', '20210113', '0', '0', '0', 'aikang', '0', '', '4', '中药沐足', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-13 14:20:19', '2021-01-13 14:20:37', '', '', '63', '', '', '1', '88', '63', '45543386', '0', '', '', '0', '2021-01-13 14:27:38');
INSERT INTO `gukeshoprecord` VALUES ('740', '100', '2', '1', '631610518887744MAk', '631610518826225000CFstScXF', '20210113', '0', '0', '0', 'aikang', '0', '', '11', '修脚', '1', '50', '50', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-13 14:20:26', '2021-01-13 15:20:57', '', '', '63', '', '', '1', '50', '63', '45543386', '0', '', '', '0', '2021-01-13 14:27:38');
INSERT INTO `gukeshoprecord` VALUES ('741', '100', '2', '0', '631610596553392f8M', '631610596524124000Rrc2CH2c', '20210114', '0', '0', '0', 'aikang', '0', '', '3', '中医推拿', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-14 11:55:24', '2021-01-14 11:55:39', '', '', '63', '', '', '1', '79.2', '2', '58557338', '2', '刘仁飞', '11608123714263000enfTEx2x', '1069.72', '2021-01-14 11:56:29');
INSERT INTO `gukeshoprecord` VALUES ('742', '100', '2', '0', '631610596553392f8M', '631610596528768000pfe7ezkh', '20210114', '0', '0', '0', 'aikang', '0', '', '4', '中药沐足', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-14 11:55:28', '2021-01-14 12:55:59', '', '', '63', '', '', '1', '79.2', '2', '58557338', '2', '刘仁飞', '11608123714263000enfTEx2x', '998.44', '2021-01-14 11:56:29');
INSERT INTO `gukeshoprecord` VALUES ('743', '100', '2', '1', '631610596553392f8M', '631610596539452000TMrpYms2', '20210114', '0', '0', '0', 'aikang', '0', '', '3', '中医推拿', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-14 11:55:39', '2021-01-14 11:55:57', '', '', '63', '', '', '1', '79.2', '2', '58557338', '2', '刘仁飞', '11608123714263000enfTEx2x', '927.16', '2021-01-14 11:56:29');
INSERT INTO `gukeshoprecord` VALUES ('744', '100', '2', '1', '631610596553392f8M', '631610596551406000xbQMFGWP', '20210114', '0', '0', '0', 'aikang', '0', '', '8', '老姜足疗', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-14 11:55:51', '2021-01-14 12:56:17', '', '', '63', '', '', '1', '79.2', '2', '58557338', '2', '刘仁飞', '11608123714263000enfTEx2x', '855.88', '2021-01-14 11:56:29');
INSERT INTO `gukeshoprecord` VALUES ('745', '100', '2', '0', '631610619638713aQ5', '631610619629238000ZX5csP3n', '20210114', '0', '0', '0', 'aikang', '0', '', '3', '中医推拿', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-14 18:20:29', '2021-01-14 18:20:47', '', '', '63', '', '', '1', '79.2', '2', '95350258', '2', '刘仁飞', '11608123714263000enfTEx2x', '745', '2021-01-14 18:21:04');
INSERT INTO `gukeshoprecord` VALUES ('746', '100', '2', '1', '631610619638713aQ5', '631610619636700000xcsRm6FH', '20210114', '0', '0', '0', 'aikang', '0', '', '1', '中医理疗', '1', '126', '126', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-14 18:20:36', '2021-01-14 18:20:53', '', '', '63', '', '', '1', '113.4', '2', '95350258', '2', '刘仁飞', '11608123714263000enfTEx2x', '631.6', '2021-01-14 18:21:04');
INSERT INTO `gukeshoprecord` VALUES ('747', '100', '2', '0', '631610619638713aQ5', '6316106197168960005aEKJxew', '20210114', '0', '0', '0', 'aikang', '0', '', '10', '聚阳箱灸', '1', '158', '158', '1', '0', '0', '-1001', '', '', '3', '0', '2021-01-14 18:21:56', '2021-01-14 19:21:07', '', '', '63', '', '', '1', '142.20000000000002', '2', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '503.62', '2021-01-14 18:22:16');
INSERT INTO `gukeshoprecord` VALUES ('748', '100', '0', '1', '631610619638713aQ5', '631610627199669000dAZNRmDS', '20210114', '0', '0', '0', 'aikang', '0', '', '16', '脾胃调理三效合一', '1', '268', '268', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-14 20:26:39', '2021-01-14 20:26:56', '', '', '63', '', '', '1', '241.20000000000002', '2', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '272.31999999999994', '2021-01-14 20:27:05');
INSERT INTO `gukeshoprecord` VALUES ('749', '100', '0', '1', '631610619638713aQ5', '631610627536489000P77x4RXK', '20210114', '0', '0', '0', 'aikang', '0', '', '16', '脾胃调理三效合一', '1', '268', '268', '1', '0', '0', '-1001', '', '', '3', '0', '2021-01-14 20:32:16', '2021-01-14 21:57:16', '', '', '63', '', '', '1', '268', '4', '', '4', '刘仁飞', '21608124037334000Zr2ST8CP', '991', '2021-01-14 20:33:08');
INSERT INTO `gukeshoprecord` VALUES ('750', '100', '0', '0', '631610619638713aQ5', '631610636117036000NcpQ4dmS', '20210114', '0', '0', '0', 'aikang', '0', '', '3', '中医推拿', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-14 22:55:17', '2021-01-14 22:55:33', '', '', '63', '', '', '1', '79.2', '2', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '168.99999999999994', '2021-01-14 22:59:36');
INSERT INTO `gukeshoprecord` VALUES ('751', '100', '3', '0', '631610684766474hF2', '631610684727776000Mz77SxM5', '20210115', '0', '0', '0', 'aikang', '0', '', '3', '中医推拿', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-15 12:25:27', '2021-01-15 12:25:45', '', '', '63', '', '', '1', '79.2', '2', '01408968', '2', '刘仁飞', '11608123714263000enfTEx2x', '2010.6000000000001', '2021-01-15 12:26:28');
INSERT INTO `gukeshoprecord` VALUES ('752', '100', '3', '1', '631610684766474hF2', '631610684736503000h5iCM2Sa', '20210115', '0', '0', '0', 'aikang', '0', '', '1', '中医理疗', '1', '126', '126', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-15 12:25:36', '2021-01-15 12:25:53', '', '', '63', '', '', '1', '113.4', '2', '01408968', '2', '刘仁飞', '11608123714263000enfTEx2x', '1897.2000000000003', '2021-01-15 12:26:28');
INSERT INTO `gukeshoprecord` VALUES ('753', '100', '3', '2', '631610684766474hF2', '631610684743977000RBB2FsX4', '20210115', '0', '0', '0', 'aikang', '0', '', '7', '艾草沐足', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-15 12:25:43', '2021-01-15 12:26:02', '', '', '63', '', '', '1', '79.2', '2', '01408968', '2', '刘仁飞', '11608123714263000enfTEx2x', '1818.0000000000002', '2021-01-15 12:26:28');
INSERT INTO `gukeshoprecord` VALUES ('754', '100', '3', '0', '631610706723404kWQ', '631610706564089000DckQZMyG', '20210115', '0', '0', '0', 'aikang', '0', '', '3', '中医推拿', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-15 18:29:24', '2021-01-15 18:29:41', '', '', '63', '', '', '1', '79.2', '2', '61856161', '2', '刘仁飞', '11608123714263000enfTEx2x', '1738.8000000000002', '2021-01-15 18:32:31');
INSERT INTO `gukeshoprecord` VALUES ('755', '100', '3', '1', '631610706723404kWQ', '6316107065685560006EFEms5B', '20210115', '0', '0', '0', 'aikang', '0', '', '1', '中医理疗', '1', '126', '126', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-15 18:29:28', '2021-01-15 18:29:47', '', '', '63', '', '', '1', '113.4', '2', '61856161', '2', '刘仁飞', '11608123714263000enfTEx2x', '1625.4', '2021-01-15 18:32:31');
INSERT INTO `gukeshoprecord` VALUES ('756', '100', '3', '2', '631610706723404kWQ', '6316107065729820003P4TBkZa', '20210115', '0', '0', '0', 'aikang', '0', '', '4', '中药沐足', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-15 18:29:32', '2021-01-15 18:29:51', '', '', '63', '', '', '1', '79.2', '2', '61856161', '2', '刘仁飞', '11608123714263000enfTEx2x', '1546.2000000000003', '2021-01-15 18:32:31');
INSERT INTO `gukeshoprecord` VALUES ('757', '100', '3', '0', '631610706723404kWQ', '631610706791871000GK73pZXn', '20210115', '0', '0', '0', 'aikang', '0', '', '5', '拔罐', '1', '35', '35', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-15 18:33:11', '2021-01-15 19:30:01', '', '', '63', '', '', '1', '31.5', '2', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '1514.7000000000003', '2021-01-15 18:33:18');
INSERT INTO `gukeshoprecord` VALUES ('758', '100', '2', '0', '6316107846235862aP', '631610784613395000jSEP8Bnr', '20210116', '0', '0', '0', 'aikang', '0', '', '3', '中医推拿', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-16 16:10:13', '2021-01-16 16:10:32', '', '', '63', '', '', '1', '79.2', '2', '73542896', '2', '刘仁飞', '11608123714263000enfTEx2x', '1435.5000000000002', '2021-01-16 16:10:42');
INSERT INTO `gukeshoprecord` VALUES ('759', '100', '2', '1', '6316107846235862aP', '631610784621966000w6HNptXZ', '20210116', '2', '0', '0', 'aikang', '0', '', '4', '中药沐足', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-16 16:10:21', '2021-01-16 16:10:39', '', '', '63', '', '', '1', '79.2', '2', '73542896', '2', '刘仁飞', '11608123714263000enfTEx2x', '1356.3000000000002', '2021-01-16 16:10:42');
INSERT INTO `gukeshoprecord` VALUES ('760', '100', '2', '0', '631610795353707dGf', '631610795338488000PEJmHZxc', '20210116', '0', '0', '0', 'aikang', '0', '', '3', '中医推拿', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-16 19:08:58', '2021-01-16 19:09:16', '', '', '63', '', '', '1', '79.2', '2', '87396368', '2', '刘仁飞', '11608123714263000enfTEx2x', '1277.1000000000001', '2021-01-16 19:09:51');
INSERT INTO `gukeshoprecord` VALUES ('761', '100', '2', '1', '631610795353707dGf', '631610795352406000FnbDpwNj', '20210116', '0', '0', '0', 'aikang', '0', '', '15', '精油推拿60分钟', '1', '128', '128', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-16 19:09:12', '2021-01-16 19:09:30', '', '', '63', '', '', '1', '115.2', '2', '87396368', '2', '刘仁飞', '11608123714263000enfTEx2x', '1161.9', '2021-01-16 19:09:51');
INSERT INTO `gukeshoprecord` VALUES ('762', '100', '0', '0', '631610795353707dGf', '631610795486109000yQ3Kbb3P', '20210116', '0', '0', '0', 'aikang', '0', '', '6', '刮痧', '1', '50', '50', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-16 19:11:26', '2021-01-16 20:09:36', '', '', '63', '', '', '1', '45', '2', '', '2', '刘仁飞', '11608123714263000enfTEx2x', '1116.9', '2021-01-16 19:11:47');
INSERT INTO `gukeshoprecord` VALUES ('763', '100', '3', '0', '631610796127287HjB', '631610796108032000nyDRr8bH', '20210116', '0', '0', '0', 'aikang', '0', '', '1', '中医理疗', '1', '126', '126', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-16 19:21:48', '2021-01-16 19:22:05', '', '', '63', '', '', '1', '113.4', '2', '03182407', '2', '刘仁飞', '11608123714263000enfTEx2x', '1003.5000000000001', '2021-01-16 19:22:31');
INSERT INTO `gukeshoprecord` VALUES ('764', '100', '3', '1', '631610796127287HjB', '631610796112794000PYBSAZEd', '20210116', '0', '0', '0', 'aikang', '0', '', '7', '艾草沐足', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-16 19:21:52', '2021-01-16 19:22:11', '', '', '63', '', '', '1', '79.2', '2', '03182407', '2', '刘仁飞', '11608123714263000enfTEx2x', '924.3000000000001', '2021-01-16 19:22:31');
INSERT INTO `gukeshoprecord` VALUES ('765', '100', '3', '2', '631610796127287HjB', '6316107961225430004zCQs3mE', '20210116', '0', '0', '0', 'aikang', '0', '', '16', '脾胃调理三效合一', '1', '268', '268', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-16 19:22:02', '2021-01-16 19:22:17', '', '', '63', '', '', '1', '241.20000000000002', '2', '03182407', '2', '刘仁飞', '11608123714263000enfTEx2x', '683.1', '2021-01-16 19:22:31');
INSERT INTO `gukeshoprecord` VALUES ('766', '100', '3', '0', '631610873463977njM', '631610873448435000CrjHh2E3', '20210117', '0', '0', '0', 'aikang', '0', '', '3', '中医推拿', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-17 16:50:48', '2021-01-17 16:51:06', '', '', '63', '', '', '1', '79.2', '2', '92653624', '2', '刘仁飞', '11608123714263000enfTEx2x', '603.9', '2021-01-17 16:51:16');
INSERT INTO `gukeshoprecord` VALUES ('767', '100', '3', '1', '631610873463977njM', '631610873453704000drGRACQA', '20210117', '0', '0', '0', 'aikang', '0', '', '1', '中医理疗', '1', '126', '126', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-17 16:50:53', '2021-01-17 16:51:12', '', '', '63', '', '', '1', '113.4', '2', '92653624', '2', '刘仁飞', '11608123714263000enfTEx2x', '490.5', '2021-01-17 16:51:16');
INSERT INTO `gukeshoprecord` VALUES ('768', '100', '3', '2', '631610873463977njM', '631610873461973000ChPHd3k2', '20210117', '0', '0', '0', 'aikang', '0', '', '4', '中药沐足', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-17 16:51:01', '2021-01-17 16:51:20', '', '', '63', '', '', '1', '79.2', '2', '92653624', '2', '刘仁飞', '11608123714263000enfTEx2x', '411.3', '2021-01-17 16:51:16');
INSERT INTO `gukeshoprecord` VALUES ('769', '100', '1', '0', '631610874427169HPD', '631610874414420000X46aEWYk', '20210117', '0', '0', '0', 'aikang', '0', '', '3', '中医推拿', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-17 17:06:54', '2021-01-17 17:07:12', '', '', '63', '', '', '1', '79.2', '2', '85349088', '2', '刘仁飞', '11608123714263000enfTEx2x', '332.1', '2021-01-17 17:07:18');
INSERT INTO `gukeshoprecord` VALUES ('770', '100', '1', '0', '631610874427169HPD', '631610874420938000AGRNGQQT', '20210117', '0', '0', '0', 'aikang', '0', '', '6', '刮痧', '1', '50', '50', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-17 17:07:00', '2021-01-17 18:07:32', '', '', '63', '', '', '1', '45', '2', '85349088', '2', '刘仁飞', '11608123714263000enfTEx2x', '287.1', '2021-01-17 17:07:18');
INSERT INTO `gukeshoprecord` VALUES ('771', '100', '1', '0', '631610874427169HPD', '6316108744246610005yPQDBDf', '20210117', '0', '0', '0', 'aikang', '0', '', '5', '拔罐', '1', '35', '35', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-17 17:07:04', '2021-01-17 18:32:52', '', '', '63', '', '', '1', '31.5', '2', '85349088', '2', '刘仁飞', '11608123714263000enfTEx2x', '255.60000000000002', '2021-01-17 17:07:18');
INSERT INTO `gukeshoprecord` VALUES ('772', '100', '2', '0', '6316109836067337z5', '631610983596792000jFDZjRZ4', '20210118', '0', '0', '0', 'aikang', '0', '', '3', '中医推拿', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-18 23:26:36', '2021-01-18 23:26:54', '', '', '63', '', '', '1', '79.2', '2', '41995776', '2', '刘仁飞', '11608123714263000enfTEx2x', '176.40000000000003', '2021-01-18 23:26:58');
INSERT INTO `gukeshoprecord` VALUES ('773', '100', '2', '1', '6316109836067337z5', '6316109836050420008Xs4brch', '20210118', '0', '0', '0', 'aikang', '0', '', '4', '中药沐足', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-18 23:26:45', '2021-01-18 23:27:03', '', '', '63', '', '', '1', '79.2', '2', '41995776', '2', '刘仁飞', '11608123714263000enfTEx2x', '97.20000000000002', '2021-01-18 23:26:58');
INSERT INTO `gukeshoprecord` VALUES ('774', '100', '2', '0', '631611049710325M4Y', '631611049696946000rzPfKmd2', '20210119', '0', '0', '0', 'aikang', '0', '', '15', '精油推拿60分钟', '1', '128', '128', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-19 17:48:16', '2021-01-19 17:48:33', '', '', '63', '', '', '1', '128', '4', '95087534', '4', '刘仁飞', '21608124037334000Zr2ST8CP', '561', '2021-01-19 17:48:36');
INSERT INTO `gukeshoprecord` VALUES ('775', '100', '2', '0', '631611049710325M4Y', '631611049700552000whtHZ8Zx', '20210119', '0', '0', '0', 'aikang', '0', '', '6', '刮痧', '1', '50', '50', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-19 17:48:20', '2021-01-19 18:48:53', '', '', '63', '', '', '1', '50', '4', '95087534', '4', '刘仁飞', '21608124037334000Zr2ST8CP', '511', '2021-01-19 17:48:36');
INSERT INTO `gukeshoprecord` VALUES ('776', '100', '2', '1', '631611049710325M4Y', '631611049708807000ktE6tRzD', '20210119', '0', '0', '0', 'aikang', '0', '', '7', '艾草沐足', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-19 17:48:28', '2021-01-19 17:48:47', '', '', '63', '', '', '1', '88', '4', '95087534', '4', '刘仁飞', '21608124037334000Zr2ST8CP', '423', '2021-01-19 17:48:36');
INSERT INTO `gukeshoprecord` VALUES ('780', '100', '2', '0', '631611050893843Try', '6316110508671980006Az5kZAi', '20210119', '0', '0', '0', 'aikang', '0', '', '1', '中医理疗', '1', '126', '126', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-19 18:07:47', '2021-01-19 18:08:05', '', '', '63', '', '', '1', '126', '4', '92125515', '4', '刘仁飞', '21608124037334000Zr2ST8CP', '297', '2021-01-19 18:08:21');
INSERT INTO `gukeshoprecord` VALUES ('781', '100', '2', '0', '631611050893843Try', '631611050885919000kMXMpwJM', '20210119', '0', '0', '0', 'aikang', '0', '', '5', '拔罐', '1', '35', '35', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-19 18:08:05', '2021-01-19 19:08:25', '', '', '63', '', '', '1', '35', '4', '92125515', '4', '刘仁飞', '21608124037334000Zr2ST8CP', '262', '2021-01-19 18:08:21');
INSERT INTO `gukeshoprecord` VALUES ('782', '100', '2', '1', '631611050893843Try', '6316110508923200004JWrkHCG', '20210119', '0', '0', '0', 'aikang', '0', '', '10', '聚阳箱灸', '1', '158', '158', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-19 18:08:12', '2021-01-19 18:08:30', '', '', '63', '', '', '1', '158', '4', '92125515', '4', '刘仁飞', '21608124037334000Zr2ST8CP', '104', '2021-01-19 18:08:21');
INSERT INTO `gukeshoprecord` VALUES ('783', '100', '2', '0', '631611052003607JYn', '631611051992453000wXYcW7Si', '20210119', '0', '0', '0', 'aikang', '0', '', '8', '老姜足疗', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-19 18:26:32', '2021-01-19 18:26:51', '', '', '63', '', '', '1', '79.2', '2', '71896884', '2', '刘仁飞', '11608123714263000enfTEx2x', '1818', '2021-01-19 18:26:50');
INSERT INTO `gukeshoprecord` VALUES ('784', '100', '2', '1', '631611052003607JYn', '631611052001294000Ds7CmKNJ', '20210119', '0', '0', '0', 'aikang', '0', '', '15', '精油推拿60分钟', '1', '128', '128', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-19 18:26:41', '2021-01-19 18:26:58', '', '', '63', '', '', '1', '115.2', '2', '71896884', '2', '刘仁飞', '11608123714263000enfTEx2x', '1702.8', '2021-01-19 18:26:50');
INSERT INTO `gukeshoprecord` VALUES ('785', '100', '2', '0', '631611059057366aAz', '631611059039401000isdAeRQB', '20210119', '0', '0', '0', 'aikang', '0', '', '3', '中医推拿', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-19 20:23:59', '2021-01-19 20:24:17', '', '', '63', '', '', '1', '79.2', '2', '07198019', '2', '刘仁飞', '11608123714263000enfTEx2x', '1623.6', '2021-01-19 20:24:24');
INSERT INTO `gukeshoprecord` VALUES ('786', '100', '2', '1', '631611059057366aAz', '631611059045421000Gbb7JZb4', '20210119', '0', '0', '0', 'aikang', '0', '', '1', '中医理疗', '1', '126', '126', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-19 20:24:05', '2021-01-19 20:24:24', '', '', '63', '', '', '1', '113.4', '2', '07198019', '2', '刘仁飞', '11608123714263000enfTEx2x', '1510.1999999999998', '2021-01-19 20:24:24');
INSERT INTO `gukeshoprecord` VALUES ('787', '100', '2', '0', '631611059057366aAz', '631611059056185000k36a42H2', '20210119', '0', '0', '0', 'aikang', '0', '', '6', '刮痧', '1', '50', '50', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-19 20:24:16', '2021-01-19 21:24:37', '', '', '63', '', '', '1', '45', '2', '07198019', '2', '刘仁飞', '11608123714263000enfTEx2x', '1465.1999999999998', '2021-01-19 20:24:24');
INSERT INTO `gukeshoprecord` VALUES ('788', '100', '2', '0', '631611063791503RT2', '631611063320212000Bna4xB0n', '20210119', '0', '0', '0', 'aikang', '0', '', '3', '中医推拿', '1', '88', '88', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-19 21:35:20', '2021-01-19 21:35:38', '', '', '63', '', '', '1', '88', '26', '95053544', '26', '刘仁飞', '316110544406140005kENkF2M', '3512', '2021-01-19 21:43:19');
INSERT INTO `gukeshoprecord` VALUES ('789', '100', '2', '0', '631611063791503RT2', '631611063325458000fMRGMAE4', '20210119', '0', '0', '0', 'aikang', '0', '', '6', '刮痧', '1', '50', '50', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-19 21:35:25', '2021-01-19 22:35:58', '', '', '63', '', '', '1', '50', '26', '95053544', '26', '刘仁飞', '316110544406140005kENkF2M', '3462', '2021-01-19 21:43:19');
INSERT INTO `gukeshoprecord` VALUES ('790', '100', '2', '1', '631611063791503RT2', '6316110637895900001J0Jawxa', '20210119', '0', '0', '0', 'aikang', '0', '', '15', '精油推拿60分钟', '1', '128', '128', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-19 21:43:09', '2021-01-19 21:43:27', '', '', '63', '', '', '1', '128', '26', '95053544', '26', '刘仁飞', '316110544406140005kENkF2M', '3334', '2021-01-19 21:43:19');
INSERT INTO `gukeshoprecord` VALUES ('791', '100', '2', '1', '631611063791503RT2', '94991611064597591000KBwhF2tb', '20210119', '0', '0', '0', 'aikang', '0', '', '15', '精油推拿60分钟', '0.5', '0.5', '128', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-19 21:43:09', '2021-01-19 21:43:27', '', '', '63', '', '', '1', '128', '26', '95053544', '26', '刘仁飞', '316110544406140005kENkF2M', '1667', '2021-01-19 21:43:19');
INSERT INTO `gukeshoprecord` VALUES ('792', '100', '2', '0', '631611065028853C7Y', '631611065015103000Jae80MEK', '20210119', '0', '0', '0', 'aikang', '0', '', '1', '中医理疗', '1', '126', '126', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-19 22:03:35', '2021-01-19 22:03:51', '', '', '63', '', '', '1', '113.4', '2', '96985436', '2', '刘仁飞', '11608123714263000enfTEx2x', '1351.7999999999997', '2021-01-19 22:03:53');
INSERT INTO `gukeshoprecord` VALUES ('793', '100', '2', '0', '631611065028853C7Y', '631611065022760000m30hRXCJ', '20210119', '0', '0', '0', 'aikang', '0', '', '6', '刮痧', '1', '50', '50', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-19 22:03:42', '2021-01-19 23:04:11', '', '', '63', '', '', '1', '45', '2', '96985436', '2', '刘仁飞', '11608123714263000enfTEx2x', '1306.7999999999997', '2021-01-19 22:03:53');
INSERT INTO `gukeshoprecord` VALUES ('794', '100', '2', '1', '631611065028853C7Y', '631611065028025000PXQ6A22X', '20210119', '0', '0', '0', 'aikang', '0', '', '15', '精油推拿60分钟', '0.5', '57.6', '128', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-19 22:03:48', '2021-01-19 22:04:06', '', '', '63', '', '', '1', '115.2', '2', '96985436', '2', '刘仁飞', '11608123714263000enfTEx2x', '595.8', '2021-01-19 22:03:53');
INSERT INTO `gukeshoprecord` VALUES ('795', '100', '2', '0', '631611065028853C7Y', '14891611065159989000xEbG28DP', '20210119', '0', '0', '0', 'aikang', '0', '', '1', '中医理疗', '0.5', '56.7', '126', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-19 22:03:35', '2021-01-19 22:03:51', '', '', '63', '', '', '1', '113.4', '2', '96985436', '2', '刘仁飞', '11608123714263000enfTEx2x', '675.8999999999999', '2021-01-19 22:03:53');
INSERT INTO `gukeshoprecord` VALUES ('796', '100', '2', '1', '631611065028853C7Y', '11841611065343411000mDWJ2p0n', '20210119', '0', '0', '0', 'aikang', '0', '', '15', '精油推拿60分钟', '0.5', '57.6', '128', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-19 22:03:48', '2021-01-19 22:04:06', '', '', '63', '', '', '1', '115.2', '2', '96985436', '2', '刘仁飞', '11608123714263000enfTEx2x', '595.8', '2021-01-19 22:03:53');
INSERT INTO `gukeshoprecord` VALUES ('797', '100', '2', '0', '631611067103751RGR', '631611067087680000DsZFepmh', '20210119', '0', '0', '0', 'aikang', '0', '', '1', '中医理疗', '0.5', '56.7', '126', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-19 22:38:07', '2021-01-19 22:38:25', '', '', '63', '', '', '1', '113.4', '2', '52781762', '2', '刘仁飞', '11608123714263000enfTEx2x', '792.8999999999999', '2021-01-19 22:38:36');
INSERT INTO `gukeshoprecord` VALUES ('798', '100', '2', '1', '631611067103751RGR', '631611067102083000FA1Cd1H6', '20210119', '0', '0', '0', 'aikang', '0', '', '15', '精油推拿60分钟', '1', '115.2', '128', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-19 22:38:22', '2021-01-19 22:38:39', '', '', '63', '', '', '1', '115.2', '2', '52781762', '2', '刘仁飞', '11608123714263000enfTEx2x', '734.3999999999999', '2021-01-19 22:38:36');
INSERT INTO `gukeshoprecord` VALUES ('799', '100', '2', '0', '631611067103751RGR', '35441611067363484000mJ91KQdi', '20210119', '0', '0', '0', 'aikang', '0', '', '1', '中医理疗', '0.5', '56.7', '126', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-19 22:38:07', '2021-01-19 22:38:25', '', '', '63', '', '', '1', '113.4', '2', '52781762', '2', '刘仁飞', '11608123714263000enfTEx2x', '849.5999999999999', '2021-01-19 22:38:36');
INSERT INTO `gukeshoprecord` VALUES ('800', '100', '2', '0', '631611069278265jNm', '6316110692716220008ywYXPSS', '20210119', '0', '0', '0', 'aikang', '0', '', '3', '中医推拿', '0.5', '39.6', '88', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-19 23:14:31', '2021-01-19 23:14:49', '', '', '63', '', '', '1', '79.2', '2', '16963830', '2', '刘仁飞', '11608123714263000enfTEx2x', '615.5999999999998', '2021-01-19 23:15:00');
INSERT INTO `gukeshoprecord` VALUES ('801', '100', '2', '1', '631611069278265jNm', '631611069277249000NTdkx7HB', '20210119', '0', '0', '0', 'aikang', '0', '', '1', '中医理疗', '0.5', '56.7', '126', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-19 23:14:37', '2021-01-19 23:14:56', '', '', '63', '', '', '1', '113.4', '2', '16963830', '2', '刘仁飞', '11608123714263000enfTEx2x', '485.09999999999985', '2021-01-19 23:15:00');
INSERT INTO `gukeshoprecord` VALUES ('802', '100', '2', '0', '631611069278265jNm', '26951611069558185000Rtha6RZY', '20210119', '0', '0', '0', 'aikang', '0', '', '3', '中医推拿', '0.5', '39.6', '88', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-19 23:14:31', '2021-01-19 23:14:49', '', '', '63', '', '', '1', '79.2', '2', '16963830', '2', '刘仁飞', '11608123714263000enfTEx2x', '655.1999999999998', '2021-01-19 23:15:00');
INSERT INTO `gukeshoprecord` VALUES ('803', '100', '2', '1', '631611069278265jNm', '56931611069596143000EKCBJkAJ', '20210119', '0', '0', '0', 'aikang', '0', '', '1', '中医理疗', '0.5', '56.7', '126', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-19 23:14:37', '2021-01-19 23:14:56', '', '', '63', '', '', '1', '113.4', '2', '16963830', '2', '刘仁飞', '11608123714263000enfTEx2x', '541.7999999999998', '2021-01-19 23:15:00');
INSERT INTO `gukeshoprecord` VALUES ('804', '100', '2', '0', '6316110699915859ri', '631611069986462000Z7CSzpsy', '20210119', '0', '0', '0', 'aikang', '0', '', '3', '中医推拿', '0.5', '39.6', '88', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-19 23:26:26', '2021-01-19 23:26:45', '', '', '63', '', '', '1', '79.2', '2', '63159001', '2', '刘仁飞', '11608123714263000enfTEx2x', '502.1999999999999', '2021-01-19 23:26:37');
INSERT INTO `gukeshoprecord` VALUES ('805', '100', '2', '1', '6316110699915859ri', '631611069990755000ca2dhs5D', '20210119', '0', '0', '0', 'aikang', '0', '', '1', '中医理疗', '1', '113.4', '126', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-19 23:26:30', '2021-01-19 23:26:49', '', '', '63', '', '', '1', '113.4', '2', '63159001', '2', '刘仁飞', '11608123714263000enfTEx2x', '349.1999999999998', '2021-01-19 23:26:37');
INSERT INTO `gukeshoprecord` VALUES ('806', '100', '2', '0', '6316110699915859ri', '55741611070076156000Ns4FbWmw', '20210119', '0', '0', '0', 'aikang', '0', '', '3', '中医推拿', '0.5', '39.6', '88', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-19 23:26:26', '2021-01-19 23:26:45', '', '', '63', '', '', '1', '79.2', '2', '63159001', '2', '刘仁飞', '11608123714263000enfTEx2x', '462.59999999999985', '2021-01-19 23:26:37');
INSERT INTO `gukeshoprecord` VALUES ('807', '100', '2', '0', '631611114898996dwS', '631611114891330000mbwjXQcY', '20210120', '0', '0', '0', 'aikang', '0', '', '1', '中医理疗', '0.5', '56.7', '126', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-20 11:54:51', '2021-01-20 11:55:08', '', '', '63', '', '', '1', '113.4', '2', '98213400', '2', '刘仁飞', '11608123714263000enfTEx2x', '863.8999999999999', '2021-01-20 11:58:52');
INSERT INTO `gukeshoprecord` VALUES ('808', '100', '2', '1', '631611114898996dwS', '6316111148978630005Pwe3PQ7', '20210120', '0', '0', '0', 'aikang', '0', '', '15', '精油推拿60分钟', '0.5', '57.6', '128', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-20 11:54:57', '2021-01-20 11:55:16', '', '', '63', '', '', '1', '115.2', '2', '98213400', '2', '刘仁飞', '11608123714263000enfTEx2x', '749.5999999999998', '2021-01-20 11:58:52');
INSERT INTO `gukeshoprecord` VALUES ('809', '100', '2', '0', '631611114898996dwS', '13111611115890804000mKYnF9Ke', '20210120', '0', '0', '0', 'aikang', '0', '', '1', '中医理疗', '0.5', '56.7', '126', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-20 11:54:51', '2021-01-20 11:55:08', '', '', '63', '', '', '1', '113.4', '2', '98213400', '2', '刘仁飞', '11608123714263000enfTEx2x', '807.1999999999998', '2021-01-20 11:58:52');
INSERT INTO `gukeshoprecord` VALUES ('810', '100', '2', '1', '631611114898996dwS', '15921611116123071000k8sr26dh', '20210120', '0', '0', '0', 'aikang', '0', '', '15', '精油推拿60分钟', '0.5', '57.6', '128', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-20 11:54:57', '2021-01-20 11:55:16', '', '', '63', '', '', '1', '115.2', '2', '98213400', '2', '刘仁飞', '11608123714263000enfTEx2x', '691.9999999999998', '2021-01-20 11:58:52');
INSERT INTO `gukeshoprecord` VALUES ('811', '100', '2', '0', '631611116415728kjQ', '6316111164091710003x7f334a', '20210120', '0', '0', '0', 'aikang', '0', '', '1', '中医理疗', '0.5', '56.7', '126', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-20 12:20:09', '2021-01-20 12:20:27', '', '', '63', '', '', '1', '113.4', '2', '00346128', '2', '刘仁飞', '11608123714263000enfTEx2x', '635.2999999999998', '2021-01-20 12:20:21');
INSERT INTO `gukeshoprecord` VALUES ('812', '100', '2', '1', '631611116415728kjQ', '631611116414632000rpApBXJe', '20210120', '0', '0', '0', 'aikang', '0', '', '15', '精油推拿60分钟', '0.5', '57.6', '128', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-20 12:20:14', '2021-01-20 12:20:33', '', '', '63', '', '', '1', '115.2', '2', '00346128', '2', '刘仁飞', '11608123714263000enfTEx2x', '520.9999999999998', '2021-01-20 12:20:21');
INSERT INTO `gukeshoprecord` VALUES ('813', '100', '2', '0', '631611116415728kjQ', '01331611116520103000M1a08SBS', '20210120', '0', '0', '0', 'aikang', '0', '', '1', '中医理疗', '0.5', '56.7', '126', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-20 12:20:09', '2021-01-20 12:20:27', '', '', '63', '', '', '1', '113.4', '2', '00346128', '2', '刘仁飞', '11608123714263000enfTEx2x', '578.5999999999998', '2021-01-20 12:20:21');
INSERT INTO `gukeshoprecord` VALUES ('814', '100', '2', '1', '631611116415728kjQ', '70521611116547949000eXjhJR6f', '20210120', '0', '0', '0', 'aikang', '0', '', '15', '精油推拿60分钟', '0.5', '57.6', '128', '1', '0', '0', '-1', '', '', '3', '0', '2021-01-20 12:20:14', '2021-01-20 12:20:33', '', '', '63', '', '', '1', '115.2', '2', '00346128', '2', '刘仁飞', '11608123714263000enfTEx2x', '463.39999999999975', '2021-01-20 12:20:21');

-- ----------------------------
-- Table structure for `guketelecode`
-- ----------------------------
DROP TABLE IF EXISTS `guketelecode`;
CREATE TABLE `guketelecode` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `uid` bigint DEFAULT '0',
  `type` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `telenumber` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `code` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `sendtime` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of guketelecode
-- ----------------------------
INSERT INTO `guketelecode` VALUES ('1', '63', 'BIND', '18620889919', '2648', '2021-01-01 19:50:01');
INSERT INTO `guketelecode` VALUES ('5', '63', 'BIND', '18720889919', '7152', '2021-01-01 18:04:34');
INSERT INTO `guketelecode` VALUES ('6', '63', 'BIND', '18920889919', '7487', '2021-01-01 18:08:28');
INSERT INTO `guketelecode` VALUES ('7', '63', 'BIND', '18920889912', '5317', '2021-01-01 18:10:32');
INSERT INTO `guketelecode` VALUES ('8', '63', 'BIND', '15722562321', '5528', '2021-01-01 18:16:56');
INSERT INTO `guketelecode` VALUES ('9', '0', 'REGCOMPANY', '18620889912', '0389', '2021-01-05 16:08:34');
INSERT INTO `guketelecode` VALUES ('10', '0', 'REGCOMPANY', '18620889919', '1128', '2021-01-05 18:43:41');
INSERT INTO `guketelecode` VALUES ('11', '0', 'REGCOMPANY', '18620889913', '4834', '2021-01-05 16:10:57');
INSERT INTO `guketelecode` VALUES ('12', '0', 'REGCOMPANY', '18620879913', '6893', '2021-01-05 16:15:24');

-- ----------------------------
-- Table structure for `guketraderecord`
-- ----------------------------
DROP TABLE IF EXISTS `guketraderecord`;
CREATE TABLE `guketraderecord` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `kid` int DEFAULT NULL,
  `kname` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `gukenum` int DEFAULT NULL,
  `gukeidx` int DEFAULT NULL,
  `billnumber` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `daynumber` int DEFAULT NULL,
  `appid` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `mch_id` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `device_info` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `sign` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `sign_type` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `err_code` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `openid` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `is_subscribe` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `trade_type` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `bank_type` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `total_fee` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `settlement_total_fee` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `fee_type` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `cash_fee` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `cash_fee_type` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `coupon_fee` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `coupon_count` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `coupon_type_$n` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `coupon_id_$n` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `coupon_fee_$n` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `transaction_id` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `time_end` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `record_time` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of guketraderecord
-- ----------------------------

-- ----------------------------
-- Table structure for `menu`
-- ----------------------------
DROP TABLE IF EXISTS `menu`;
CREATE TABLE `menu` (
  `id` int NOT NULL AUTO_INCREMENT,
  `url` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `path` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `component` varchar(64) DEFAULT NULL,
  `name` varchar(64) DEFAULT NULL,
  `iconCls` varchar(64) DEFAULT NULL,
  `keepAlive` tinyint(1) DEFAULT NULL,
  `requireAuth` tinyint(1) DEFAULT NULL,
  `parentId` int DEFAULT NULL,
  `enabled` tinyint(1) DEFAULT '1',
  `isparent` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `parentId` (`parentId`),
  CONSTRAINT `menu_ibfk_1` FOREIGN KEY (`parentId`) REFERENCES `menu` (`id`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of menu
-- ----------------------------
INSERT INTO `menu` VALUES ('38', '/**', '/', 'Home', '根', 'fa-use', null, null, null, '0', '0');
INSERT INTO `menu` VALUES ('39', '/System/**', '/System', 'Home', '系统设置', 'fa-use', null, null, null, '1', '1');
INSERT INTO `menu` VALUES ('40', '/System/Authority/**', '/System/Authority', 'Home', '权限管理', 'fa-use', null, null, '39', '1', '0');
INSERT INTO `menu` VALUES ('41', '/System/Funcurl/**', '/System/Funcurl', 'Home', '功能管理', 'fa-use', null, null, '39', '1', '0');
INSERT INTO `menu` VALUES ('42', '/Member/**', '/Member', 'Home', '员工管理', 'fa-use', null, null, null, '1', '1');
INSERT INTO `menu` VALUES ('43', '/Member/Query/**', '/Member/Query', 'Home', '查看员工资料', 'fa-use', null, null, '42', '1', '0');
INSERT INTO `menu` VALUES ('44', '/Member/SetVisiable/**', '/Member/SetVisiable', 'Home', '显示隐藏员工', 'fa-use', null, null, '42', '1', '0');
INSERT INTO `menu` VALUES ('45', '/Member/AddNew/**', '/Member/AddNew', 'Home', '添加新员工', 'fa-use', null, null, '42', '1', '0');
INSERT INTO `menu` VALUES ('46', '/Member/Update/**', '/Member/Update', 'Home', '修改员工资料', 'fa-use', null, null, '42', '1', '0');
INSERT INTO `menu` VALUES ('47', '/ServiceItem/**', '/ServiceItem', 'Home', '服务项目', 'fa-use', null, null, null, '1', '1');
INSERT INTO `menu` VALUES ('48', '/ServiceItem/AddNew/**', '/ServiceItem/AddNew', 'Home', '添加项目', 'fa-use', null, null, '47', '1', '0');
INSERT INTO `menu` VALUES ('49', '/ServiceItem/Querry/**', '/ServiceItem/Querry', 'Home', '查看项目', 'fa-use', null, null, '47', '1', '0');
INSERT INTO `menu` VALUES ('50', '/ServiceItem/Update/**', '/ServiceItem/Update', 'Home', '修改项目', 'fa-use', null, null, '47', '1', '0');
INSERT INTO `menu` VALUES ('51', '/ServiceItem/Sort/**', '/ServiceItem/Sort', 'Home', '项目排序', 'fa-use', null, null, '47', '1', '0');
INSERT INTO `menu` VALUES ('52', '/ServiceItem/SetVisiable/**', '/ServiceItem/SetVisiable', 'Home', '隐藏项目', 'fa-use', null, null, '47', '1', '0');
INSERT INTO `menu` VALUES ('53', '/PlanWorker/**', '/PlanWorker', 'Home', '排钟设置', 'fa-use', null, null, null, '1', '1');
INSERT INTO `menu` VALUES ('54', '/PlanWorker/PlanList/**', '/PlanWorker/PlanList', 'Home', '排钟人员', 'fa-use', null, null, '53', '1', '0');
INSERT INTO `menu` VALUES ('55', '/PlanWorker/PlanExcItem/**', '/PlanWorker/PlanExcItem', 'Home', '排钟项目', 'fa-use', null, null, '53', '1', '0');
INSERT INTO `menu` VALUES ('56', '/PlanWorker/Config/**', '/PlanWorker/Config', 'Home', '排钟设置', 'fa-use', null, null, '53', '1', '0');
INSERT INTO `menu` VALUES ('57', '/ServiceSalary/**', '/ServiceSalary', 'Home', '提成设置', 'fa-use', null, null, null, '1', '1');
INSERT INTO `menu` VALUES ('58', '/ServiceSalary/Config/**', '/ServiceSalary/Config', 'Home', '设置提成', 'fa-use', null, null, '57', '1', '0');
INSERT INTO `menu` VALUES ('59', '/ServiceSalary/Querry/**', '/ServiceSalary/Querry', 'Home', '查看提成', 'fa-use', null, null, '57', '1', '0');
INSERT INTO `menu` VALUES ('60', '/RoomSet/**', '/RoomSet', 'Home', '房间设置', 'fa-use', null, null, null, '1', '1');
INSERT INTO `menu` VALUES ('61', '/RoomSet/Querry/**', '/RoomSet/Querry', 'Home', '查看房间', 'fa-use', null, null, '60', '1', '0');
INSERT INTO `menu` VALUES ('62', '/RoomSet/Add/**', '/RoomSet/Add', 'Home', '添加房间', 'fa-use', null, null, '60', '1', '0');
INSERT INTO `menu` VALUES ('63', '/RoomSet/Update/**', '/RoomSet/Update', 'Home', '修改房间', 'fa-use', null, null, '60', '1', '0');
INSERT INTO `menu` VALUES ('64', '/RoomSet/SetEnabled/**', '/RoomSet/SetEnabled', 'Home', '显示隐藏房间', 'fa-use', null, null, '60', '1', '0');
INSERT INTO `menu` VALUES ('65', '/WaiterSet/**', '/WaiterSet', 'Home', '前台服务', 'fa-use', null, null, null, '1', '1');
INSERT INTO `menu` VALUES ('66', '/WaiterSet/Add/**', '/WaiterSet/Add', 'Home', '服务开单', 'fa-use', null, null, '65', '1', '0');
INSERT INTO `menu` VALUES ('67', '/WorkerPick/**', '/WorkerPick', 'Home', '技师功能', 'fa-use', null, null, null, '1', '1');
INSERT INTO `menu` VALUES ('72', '/WaiterSet/WorksManager/**', '/WaiterSet/WorksManager', 'Home', '技师列表', 'fa-use', null, null, '65', '1', '0');
INSERT INTO `menu` VALUES ('73', '/WaiterSet/BillManager/**', '/WaiterSet/BillManager', 'Home', '钟单结账', 'fa-use', null, null, '65', '1', '0');
INSERT INTO `menu` VALUES ('74', '/WaiterSet/BillModify/**', '/WaiterSet/BillModify', 'Home', '账单修改', 'fa-use', null, null, '65', '1', '0');
INSERT INTO `menu` VALUES ('75', '/WorkerPick/Refresh/**', '/WorkerPick/Refresh', 'Home', '钟单服务', 'fa-use', null, null, '67', '1', '0');
INSERT INTO `menu` VALUES ('76', '/WorkerPick/TurnInfo/**', '/WorkerPick/TurnInfo', 'Home', '我的牌序', 'fa-use', null, null, '67', '1', '0');
INSERT INTO `menu` VALUES ('79', '/WaiterSet/ShopBillModifyPriceType/**', '/WaiterSet/ShopBillModifyPriceType', 'Home', '顾客单按设定修改价格', 'fa-use', null, null, '65', '1', '0');
INSERT INTO `menu` VALUES ('80', '/WaiterSet/ShopBillModifyPriceAny/**', '/WaiterSet/ShopBillModifyPriceAny', 'Home', '顾客单随意修改价格', 'fa-use', null, null, '65', '1', '0');
INSERT INTO `menu` VALUES ('81', '/WaiterSet/ShopBillCheck/**', '/WaiterSet/ShopBillCheck', 'Home', '顾客单确认付款并下单', 'fa-use', null, null, '65', '1', '0');
INSERT INTO `menu` VALUES ('82', '/WaiterSet/ShopBillLookInfo/**', '/WaiterSet/ShopBillLookInfo', 'Home', '顾客单查看管理', 'fa-use', null, null, '65', '1', '0');
INSERT INTO `menu` VALUES ('84', '/HuiYuanSet/**', '/HuiYuanSet', 'Home', '会员管理', 'fa-use', null, null, null, '1', '1');
INSERT INTO `menu` VALUES ('85', '/HuiYuanSet/TypeSet/**', '/HuiYuanSet/TypeSet', 'Home', '会员类型管理', 'fa-use', null, null, '84', '1', '0');
INSERT INTO `menu` VALUES ('86', '/HuiYuanSet/HuiYuanInfo/**', '/HuiYuanSet/HuiYuanInfo', 'Home', '会员卡信息查看', 'fa-use', null, null, '84', '1', '0');
INSERT INTO `menu` VALUES ('87', '/HuiYuanSet/UpdateInfo/**', '/HuiYuanSet/UpdateInfo', 'Home', '会员卡信息修改', 'fa-use', null, null, '84', '1', '0');
INSERT INTO `menu` VALUES ('88', '/HuiYuanSet/CardAndCharge/**', '/HuiYuanSet/CardAndCharge', 'Home', '会员办卡充值', 'fa-use', null, null, '84', '1', '0');
INSERT INTO `menu` VALUES ('89', '/QueryData/**', '/QueryData', 'Home', '查询与统计', 'fa-use', null, null, null, '1', '1');
INSERT INTO `menu` VALUES ('90', '/QueryData/BillSummary/**', '/QueryData/BillSummary', 'Home', '营业统计', 'fa-use', null, null, '89', '1', '0');
INSERT INTO `menu` VALUES ('91', '/QueryData/WorkServiceSummary/**', '/QueryData/WorkServiceSummary', 'Home', '工作统计', 'fa-use', null, null, '89', '1', '0');
INSERT INTO `menu` VALUES ('92', '/QueryData/XiaofeiJiLu/**', '/QueryData/XiaofeiJiLu', 'Home', '消费记录查询', 'fa-use', null, null, '89', '1', '0');
INSERT INTO `menu` VALUES ('93', '/QueryData/XiaofeiJiLuModify/**', '/QueryData/XiaofeiModifyJiLu', 'Home', '消费记录修改与删除', 'fa-use', null, null, '89', '1', '0');

-- ----------------------------
-- Table structure for `moneychannel`
-- ----------------------------
DROP TABLE IF EXISTS `moneychannel`;
CREATE TABLE `moneychannel` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `company` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `channelname` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `blocktime` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `isblock` int DEFAULT '0',
  `blockkid` bigint DEFAULT '0',
  `blocktype` int DEFAULT '0',
  `blockbillnumber` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `blockbillprice` double DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of moneychannel
-- ----------------------------
INSERT INTO `moneychannel` VALUES ('2', 'aikang', 'wxpay', '2020-12-02 19:03:53', '1', '63', '0', '631606903695006ypw', '50');
INSERT INTO `moneychannel` VALUES ('3', 'aikang', 'alpay', '2020-12-01 19:36:47', '1', '63', '0', '631606716078463sEZ', '50');
INSERT INTO `moneychannel` VALUES ('4', 'aikang', 'wxpay', '2020-12-01 20:05:42', '1', '63', '0', '631606716078463sEZ', '126');
INSERT INTO `moneychannel` VALUES ('5', 'aikang', 'wxpay', '2020-12-01 20:09:13', '1', '63', '0', '631606716078463sEZ', '88');
INSERT INTO `moneychannel` VALUES ('6', 'aikang', 'wxpay', '2020-12-01 20:39:56', '1', '63', '0', '631606716078463sEZ', '173');
INSERT INTO `moneychannel` VALUES ('7', 'aikang', 'alpay', '2020-12-02 00:51:54', '1', '63', '0', '631606841507426rZR', '249');
INSERT INTO `moneychannel` VALUES ('8', 'aikang', 'wxpay', '2020-12-02 12:38:10', '1', '63', '0', '631606841507426rZR', '249');
INSERT INTO `moneychannel` VALUES ('9', 'aikang', 'alpay', '2020-12-02 12:40:08', '1', '63', '0', '631606841507426rZR', '123');
INSERT INTO `moneychannel` VALUES ('10', 'aikang', 'wxpay', '2020-12-02 18:12:57', '0', '63', '0', '631606903695006ypw', '337');
INSERT INTO `moneychannel` VALUES ('11', 'aikang', 'wxpay', '2020-12-02 19:00:18', '1', '63', '0', '631606903695006ypw', '44');
INSERT INTO `moneychannel` VALUES ('12', 'aikang', 'wxpay', '2020-12-03 14:41:16', '0', '63', '0', '631606977673148KjX', '70');
INSERT INTO `moneychannel` VALUES ('13', 'aikang', 'wxpay', '2020-12-03 17:28:30', '0', '63', '0', '631606987706194pX4', '105');
INSERT INTO `moneychannel` VALUES ('14', 'aikang', 'wxpay', '2020-12-18 16:34:07', '0', '63', '0', '631608280340584S8w', '314');
INSERT INTO `moneychannel` VALUES ('15', 'aikang', 'wxpay', '2021-01-12 14:38:42', '0', '63', '0', '631610366270873PRw', '734');
INSERT INTO `moneychannel` VALUES ('16', 'aikang', 'wxpay', '2021-01-13 14:21:45', '1', '63', '0', '631610518887744MAk', '276.56');
INSERT INTO `moneychannel` VALUES ('17', 'aikang', 'wxpay', '2021-01-13 14:27:04', '0', '63', '0', '631610518887744MAk', '276');

-- ----------------------------
-- Table structure for `moneychannelrecord`
-- ----------------------------
DROP TABLE IF EXISTS `moneychannelrecord`;
CREATE TABLE `moneychannelrecord` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `company` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `channelname` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `blocktime` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `isblock` int DEFAULT '0',
  `blockkid` bigint DEFAULT '0',
  `blocktype` int DEFAULT '0',
  `blockbillnumber` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `blockbillprice` double DEFAULT '0',
  `paymoney` double DEFAULT '0',
  `paynotifytime` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `payrecivetime` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `notifytile` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `notifycontent` varchar(256) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of moneychannelrecord
-- ----------------------------
INSERT INTO `moneychannelrecord` VALUES ('12', 'aikang', 'wxpay', '2020-12-03 11:32:13', '0', '63', '0', '631606966324861f5t', '70', '0.7', '2020-12-03 11:32', '2020-12-03 11:32:46', '微信收款助手', '[2条]微信收款助手: 微信支付收款0.70元(朋友到店)');
INSERT INTO `moneychannelrecord` VALUES ('13', 'aikang', 'wxpay', '2020-12-03 14:41:16', '0', '63', '0', '631606977673148KjX', '70', '0.7', '2020-12-03 14:41', '2020-12-03 14:41:43', '微信收款助手', '微信支付收款0.70元(朋友到店)');
INSERT INTO `moneychannelrecord` VALUES ('14', 'aikang', 'wxpay', '2020-12-03 17:28:30', '0', '63', '0', '631606987706194pX4', '105', '1.05', '2020-12-03 17:29', '2020-12-03 17:29:58', '微信收款助手', '微信支付收款1.05元(朋友到店)');
INSERT INTO `moneychannelrecord` VALUES ('15', 'aikang', 'wxpay', '2020-12-18 16:34:07', '0', '63', '0', '631608280340584S8w', '314', '3.14', '2020-12-18 16:36', '2020-12-18 16:36:43', '微信收款助手', '微信支付收款3.14元(朋友到店)');
INSERT INTO `moneychannelrecord` VALUES ('16', 'aikang', 'wxpay', '2021-01-12 14:38:42', '0', '63', '0', '631610366270873PRw', '734', '7.34', '2021-01-12 14:40', '2021-01-12 14:40:53', '微信收款助手', '微信支付收款7.34元(朋友到店)');
INSERT INTO `moneychannelrecord` VALUES ('17', 'aikang', 'wxpay', '2021-01-13 14:27:04', '0', '63', '0', '631610518887744MAk', '276', '2.76', '2021-01-13 14:27', '2021-01-13 14:27:38', '微信收款助手', '[5条]微信收款助手: 微信支付收款2.76元(朋友到店)');

-- ----------------------------
-- Table structure for `role`
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(64) DEFAULT NULL,
  `nameZh` varchar(64) DEFAULT NULL COMMENT '角色名称',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES ('1', 'ROLE_admin', '超管');
INSERT INTO `role` VALUES ('2', 'ROLE_manager', '总经理');
INSERT INTO `role` VALUES ('3', 'ROLE_leader', '店长');
INSERT INTO `role` VALUES ('4', 'ROLE_cashier', '收银员');
INSERT INTO `role` VALUES ('5', 'ROLE_worker', '技师');
INSERT INTO `role` VALUES ('6', 'ROLE_temp', '勤杂');
INSERT INTO `role` VALUES ('13', 'ROLE_floormanager', '大堂经理');
INSERT INTO `role` VALUES ('14', 'ROLE_clockmanager', '钟房');
INSERT INTO `role` VALUES ('17', 'ROLE_floor1', '楼面1');
INSERT INTO `role` VALUES ('18', 'ROLE_floor2', '楼面2');
INSERT INTO `role` VALUES ('19', 'ROLE_floor3', '楼面3');
INSERT INTO `role` VALUES ('20', 'ROLE_special1', '特定1');
INSERT INTO `role` VALUES ('21', 'ROLE_special2', '特定2');
