"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantUpsertWithoutLocationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateWithoutLocationsInput_1 = require("../inputs/TenantCreateWithoutLocationsInput");
const TenantUpdateWithoutLocationsInput_1 = require("../inputs/TenantUpdateWithoutLocationsInput");
let TenantUpsertWithoutLocationsInput = class TenantUpsertWithoutLocationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateWithoutLocationsInput_1.TenantUpdateWithoutLocationsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantUpdateWithoutLocationsInput_1.TenantUpdateWithoutLocationsInput)
], TenantUpsertWithoutLocationsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateWithoutLocationsInput_1.TenantCreateWithoutLocationsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantCreateWithoutLocationsInput_1.TenantCreateWithoutLocationsInput)
], TenantUpsertWithoutLocationsInput.prototype, "create", void 0);
TenantUpsertWithoutLocationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantUpsertWithoutLocationsInput", {
        isAbstract: true
    })
], TenantUpsertWithoutLocationsInput);
exports.TenantUpsertWithoutLocationsInput = TenantUpsertWithoutLocationsInput;
