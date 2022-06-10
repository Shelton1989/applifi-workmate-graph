"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AddressCount = class AddressCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], AddressCount.prototype, "Orders", void 0);
AddressCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AddressCount", {
        isAbstract: true
    })
], AddressCount);
exports.AddressCount = AddressCount;
