"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantUpdateOneRequiredWithoutDocumentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateOrConnectWithoutDocumentsInput_1 = require("../inputs/TenantCreateOrConnectWithoutDocumentsInput");
const TenantCreateWithoutDocumentsInput_1 = require("../inputs/TenantCreateWithoutDocumentsInput");
const TenantUpdateWithoutDocumentsInput_1 = require("../inputs/TenantUpdateWithoutDocumentsInput");
const TenantUpsertWithoutDocumentsInput_1 = require("../inputs/TenantUpsertWithoutDocumentsInput");
const TenantWhereUniqueInput_1 = require("../inputs/TenantWhereUniqueInput");
let TenantUpdateOneRequiredWithoutDocumentsInput = class TenantUpdateOneRequiredWithoutDocumentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateWithoutDocumentsInput_1.TenantCreateWithoutDocumentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateWithoutDocumentsInput_1.TenantCreateWithoutDocumentsInput)
], TenantUpdateOneRequiredWithoutDocumentsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateOrConnectWithoutDocumentsInput_1.TenantCreateOrConnectWithoutDocumentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateOrConnectWithoutDocumentsInput_1.TenantCreateOrConnectWithoutDocumentsInput)
], TenantUpdateOneRequiredWithoutDocumentsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpsertWithoutDocumentsInput_1.TenantUpsertWithoutDocumentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpsertWithoutDocumentsInput_1.TenantUpsertWithoutDocumentsInput)
], TenantUpdateOneRequiredWithoutDocumentsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantWhereUniqueInput_1.TenantWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantWhereUniqueInput_1.TenantWhereUniqueInput)
], TenantUpdateOneRequiredWithoutDocumentsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateWithoutDocumentsInput_1.TenantUpdateWithoutDocumentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpdateWithoutDocumentsInput_1.TenantUpdateWithoutDocumentsInput)
], TenantUpdateOneRequiredWithoutDocumentsInput.prototype, "update", void 0);
TenantUpdateOneRequiredWithoutDocumentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantUpdateOneRequiredWithoutDocumentsInput", {
        isAbstract: true
    })
], TenantUpdateOneRequiredWithoutDocumentsInput);
exports.TenantUpdateOneRequiredWithoutDocumentsInput = TenantUpdateOneRequiredWithoutDocumentsInput;
