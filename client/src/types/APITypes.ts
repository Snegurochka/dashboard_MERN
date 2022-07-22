import { ClientType, ProjectType } from "./types"

export type ProjectsAPIType = {
    projects: ProjectType[]
}

export type ClientsAPIType = {
    clients: ClientType[]
}

export type ProjectAPIType = {
    project: ProjectType
}