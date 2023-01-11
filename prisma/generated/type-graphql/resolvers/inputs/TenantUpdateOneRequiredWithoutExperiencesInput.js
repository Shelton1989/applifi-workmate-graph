"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantUpdateOneRequiredWithoutExperiencesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateOrConnectWithoutExperiencesInput_1 = require("../inputs/TenantCreateOrConnectWithoutExperiencesInput");
const TenantCreateWithoutExperiencesInput_1 = require("../inputs/TenantCreateWithoutExperiencesInput");
const TenantUpdateWithoutExperiencesInput_1 = require("../inputs/TenantUpdateWithoutExperiencesInput");
const TenantUpsertWithoutExperiencesInput_1 = require("../inputs/TenantUpsertWithoutExperiencesInput");
const TenantWhereUniqueInput_1 = require("../inputs/TenantWhereUniqueInput");
let TenantUpdateOneRequiredWithoutExperiencesInput = class TenantUpdateOneRequiredWithoutExperiencesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateWithoutExperiencesInput_1.TenantCreateWithoutExperiencesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateWithoutExperiencesInput_1.TenantCreateWithoutExperiencesInput)
], TenantUpdateOneRequiredWithoutExperiencesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateOrConnectWithoutExperiencesInput_1.TenantCreateOrConnectWithoutExperiencesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateOrConnectWithoutExperiencesInput_1.TenantCreateOrConnectWithoutExperiencesInput)
], TenantUpdateOneRequiredWithoutExperiencesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpsertWithoutExperiencesInput_1.TenantUpsertWithoutExperiencesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpsertWithoutExperiencesInput_1.TenantUpsertWithoutExperiencesInput)
], TenantUpdateOneRequiredWithoutExperiencesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantWhereUniqueInput_1.TenantWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantWhereUniqueInput_1.TenantWhereUniqueInput)
], TenantUpdateOneRequiredWithoutExperiencesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateWithoutExperiencesInput_1.TenantUpdateWithoutExperiencesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpdateWithoutExperiencesInput_1.TenantUpdateWithoutExperiencesInput)
], TenantUpdateOneRequiredWithoutExperiencesInput.prototype, "update", void 0);
TenantUpdateOneRequiredWithoutExperiencesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantUpdateOneRequiredWithoutExperiencesInput", {
        isAbstract: true
    })
], TenantUpdateOneRequiredWithoutExperiencesInput);
exports.TenantUpdateOneRequiredWithoutExperiencesInput = TenantUpdateOneRequiredWithoutExperiencesInput;
