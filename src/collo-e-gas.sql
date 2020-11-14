/*
 Navicat Premium Data Transfer

 Source Server         : Myql
 Source Server Type    : MySQL
 Source Server Version : 80018
 Source Host           : localhost:3308
 Source Schema         : collo-e-gas

 Target Server Type    : MySQL
 Target Server Version : 80018
 File Encoding         : 65001

 Date: 14/11/2020 18:14:04
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `email` varchar(100) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `isLoggedIn` varchar(255) CHARACTER SET armscii8 COLLATE armscii8_general_ci NULL DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET armscii8 COLLATE armscii8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = armscii8 COLLATE = armscii8_general_ci ROW_FORMAT = Dynamic STORAGE DISK;

SET FOREIGN_KEY_CHECKS = 1;
