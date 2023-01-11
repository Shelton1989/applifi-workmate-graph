"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceCreateOrConnectWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateWithoutTenantInput_1 = require("../inputs/ExperienceCreateWithoutTenantInput");
const ExperienceWhereUniqueInput_1 = require("../inputs/ExperienceWhereUniqueInput");
let ExperienceCreateOrConnectWithoutTenantInput = class ExperienceCreateOrConnectWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput)
], ExperienceCreateOrConnectWithoutTenantInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateWithoutTenantInput_1.ExperienceCreateWithoutTenantInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceCreateWithoutTenantInput_1.ExperienceCreateWithoutTenantInput)
], ExperienceCreateOrConnectWithoutTenantInput.prototype, "create", void 0);
ExperienceCreateOrConnectWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceCreateOrConnectWithoutTenantInput", {
        isAbstract: true
    })
], ExperienceCreateOrConnectWithoutTenantInput);
exports.ExperienceCreateOrConnectWithoutTenantInput = ExperienceCreateOrConnectWithoutTenantInput;
