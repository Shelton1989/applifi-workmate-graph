"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let QueryWhereUniqueInput = class QueryWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QueryWhereUniqueInput.prototype, "id", void 0);
QueryWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QueryWhereUniqueInput", {
        isAbstract: true
    })
], QueryWhereUniqueInput);
exports.QueryWhereUniqueInput = QueryWhereUniqueInput;
