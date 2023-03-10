"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TenantCount = class TenantCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TenantCount.prototype, "Users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TenantCount.prototype, "Meals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TenantCount.prototype, "Orders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TenantCount.prototype, "Locations", void 0);
TenantCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TenantCount", {
        isAbstract: true
    })
], TenantCount);
exports.TenantCount = TenantCount;
