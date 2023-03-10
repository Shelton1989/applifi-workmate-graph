"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantUpdateOneRequiredWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateOrConnectWithoutOrdersInput_1 = require("../inputs/TenantCreateOrConnectWithoutOrdersInput");
const TenantCreateWithoutOrdersInput_1 = require("../inputs/TenantCreateWithoutOrdersInput");
const TenantUpdateWithoutOrdersInput_1 = require("../inputs/TenantUpdateWithoutOrdersInput");
const TenantUpsertWithoutOrdersInput_1 = require("../inputs/TenantUpsertWithoutOrdersInput");
const TenantWhereUniqueInput_1 = require("../inputs/TenantWhereUniqueInput");
let TenantUpdateOneRequiredWithoutOrdersInput = class TenantUpdateOneRequiredWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateWithoutOrdersInput_1.TenantCreateWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateWithoutOrdersInput_1.TenantCreateWithoutOrdersInput)
], TenantUpdateOneRequiredWithoutOrdersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateOrConnectWithoutOrdersInput_1.TenantCreateOrConnectWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateOrConnectWithoutOrdersInput_1.TenantCreateOrConnectWithoutOrdersInput)
], TenantUpdateOneRequiredWithoutOrdersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpsertWithoutOrdersInput_1.TenantUpsertWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpsertWithoutOrdersInput_1.TenantUpsertWithoutOrdersInput)
], TenantUpdateOneRequiredWithoutOrdersInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantWhereUniqueInput_1.TenantWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantWhereUniqueInput_1.TenantWhereUniqueInput)
], TenantUpdateOneRequiredWithoutOrdersInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateWithoutOrdersInput_1.TenantUpdateWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpdateWithoutOrdersInput_1.TenantUpdateWithoutOrdersInput)
], TenantUpdateOneRequiredWithoutOrdersInput.prototype, "update", void 0);
TenantUpdateOneRequiredWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantUpdateOneRequiredWithoutOrdersInput", {
        isAbstract: true
    })
], TenantUpdateOneRequiredWithoutOrdersInput);
exports.TenantUpdateOneRequiredWithoutOrdersInput = TenantUpdateOneRequiredWithoutOrdersInput;
