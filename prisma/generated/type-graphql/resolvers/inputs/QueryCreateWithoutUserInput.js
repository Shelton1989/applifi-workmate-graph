"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateNestedOneWithoutQueriesInput_1 = require("../inputs/TenantCreateNestedOneWithoutQueriesInput");
let QueryCreateWithoutUserInput = class QueryCreateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QueryCreateWithoutUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateNestedOneWithoutQueriesInput_1.TenantCreateNestedOneWithoutQueriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantCreateNestedOneWithoutQueriesInput_1.TenantCreateNestedOneWithoutQueriesInput)
], QueryCreateWithoutUserInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QueryCreateWithoutUserInput.prototype, "queryLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QueryCreateWithoutUserInput.prototype, "queryText", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], QueryCreateWithoutUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], QueryCreateWithoutUserInput.prototype, "updatedAt", void 0);
QueryCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QueryCreateWithoutUserInput", {
        isAbstract: true
    })
], QueryCreateWithoutUserInput);
exports.QueryCreateWithoutUserInput = QueryCreateWithoutUserInput;
