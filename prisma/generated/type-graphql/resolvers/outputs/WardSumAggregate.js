"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WardSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let WardSumAggregate = class WardSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], WardSumAggregate.prototype, "number", void 0);
WardSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("WardSumAggregate", {
        isAbstract: true
    })
], WardSumAggregate);
exports.WardSumAggregate = WardSumAggregate;
