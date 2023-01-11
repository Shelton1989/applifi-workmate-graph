"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TenantWhereUniqueInput = class TenantWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantWhereUniqueInput.prototype, "slug", void 0);
TenantWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantWhereUniqueInput", {
        isAbstract: true
    })
], TenantWhereUniqueInput);
exports.TenantWhereUniqueInput = TenantWhereUniqueInput;
