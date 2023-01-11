"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceCreateNestedManyWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateManyTenantInputEnvelope_1 = require("../inputs/ExperienceCreateManyTenantInputEnvelope");
const ExperienceCreateOrConnectWithoutTenantInput_1 = require("../inputs/ExperienceCreateOrConnectWithoutTenantInput");
const ExperienceCreateWithoutTenantInput_1 = require("../inputs/ExperienceCreateWithoutTenantInput");
const ExperienceWhereUniqueInput_1 = require("../inputs/ExperienceWhereUniqueInput");
let ExperienceCreateNestedManyWithoutTenantInput = class ExperienceCreateNestedManyWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceCreateWithoutTenantInput_1.ExperienceCreateWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceCreateNestedManyWithoutTenantInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceCreateOrConnectWithoutTenantInput_1.ExperienceCreateOrConnectWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceCreateNestedManyWithoutTenantInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateManyTenantInputEnvelope_1.ExperienceCreateManyTenantInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreateManyTenantInputEnvelope_1.ExperienceCreateManyTenantInputEnvelope)
], ExperienceCreateNestedManyWithoutTenantInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceCreateNestedManyWithoutTenantInput.prototype, "connect", void 0);
ExperienceCreateNestedManyWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceCreateNestedManyWithoutTenantInput", {
        isAbstract: true
    })
], ExperienceCreateNestedManyWithoutTenantInput);
exports.ExperienceCreateNestedManyWithoutTenantInput = ExperienceCreateNestedManyWithoutTenantInput;
