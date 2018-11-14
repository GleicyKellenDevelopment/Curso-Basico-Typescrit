"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = (function () {
    function Dao() {
    }
    Dao.prototype.insert = function (object) {
        console.log('inserting ...');
        return true;
    };
    Dao.prototype.update = function (object) {
        console.log('updating ...');
        return true;
    };
    Dao.prototype.delete = function (id) {
        console.log('deleting ...');
        return true;
    };
    Dao.prototype.findById = function (id) {
        console.log('findById ...');
        return null;
    };
    Dao.prototype.findAll = function () {
        console.log('finding ...');
        return [null];
    };
    return Dao;
}());
exports.Dao = Dao;
//# sourceMappingURL=dao.js.map