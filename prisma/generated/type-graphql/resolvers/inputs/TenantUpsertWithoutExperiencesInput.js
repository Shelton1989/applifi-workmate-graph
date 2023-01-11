"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantUpsertWithoutExperiencesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateWithoutExperiencesInput_1 = require("../inputs/TenantCreateWithoutExperiencesInput");
const TenantUpdateWithoutExperiencesInput_1 = require("../inputs/TenantUpdateWithoutExperiencesInput");
let TenantUpsertWithoutExperiencesInput = class TenantUpsertWithoutExperiencesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateWithoutExperiencesInput_1.TenantUpdateWithoutExperiencesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantUpdateWithoutExperiencesInput_1.TenantUpdateWithoutExperiencesInput)
], TenantUpsertWithoutExperiencesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateWithoutExperiencesInput_1.TenantCreateWithoutExperiencesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantCreateWithoutExperiencesInput_1.TenantCreateWithoutExperiencesInput)
], TenantUpsertWithoutExperiencesInput.prototype, "create", void 0);
TenantUpsertWithoutExperiencesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantUpsertWithoutExperiencesInput", {
        isAbstract: true
    })
], TenantUpsertWithoutExperiencesInput);
exports.TenantUpsertWithoutExperiencesInput = TenantUpsertWithoutExperiencesInput;
