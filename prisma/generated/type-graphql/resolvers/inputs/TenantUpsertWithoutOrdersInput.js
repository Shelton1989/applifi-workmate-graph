"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantUpsertWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateWithoutOrdersInput_1 = require("../inputs/TenantCreateWithoutOrdersInput");
const TenantUpdateWithoutOrdersInput_1 = require("../inputs/TenantUpdateWithoutOrdersInput");
let TenantUpsertWithoutOrdersInput = class TenantUpsertWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateWithoutOrdersInput_1.TenantUpdateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantUpdateWithoutOrdersInput_1.TenantUpdateWithoutOrdersInput)
], TenantUpsertWithoutOrdersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateWithoutOrdersInput_1.TenantCreateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantCreateWithoutOrdersInput_1.TenantCreateWithoutOrdersInput)
], TenantUpsertWithoutOrdersInput.prototype, "create", void 0);
TenantUpsertWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantUpsertWithoutOrdersInput", {
        isAbstract: true
    })
], TenantUpsertWithoutOrdersInput);
exports.TenantUpsertWithoutOrdersInput = TenantUpsertWithoutOrdersInput;
